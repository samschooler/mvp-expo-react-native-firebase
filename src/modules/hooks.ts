import { useContext, useEffect } from "react";
import { NavigationContext } from "react-navigation";
import { Dispatch, ApplicationState } from "types/store";
import * as rredux from "react-redux";
import { AuthDataState } from "types/user";

/**
 * The current context from `react-navigation`
 * @return The current `navigation` context from `react-navigation`
 */
export const useNavigation = () => useContext(NavigationContext);

export const useDispatch = () => rredux.useDispatch<Dispatch>();

export function useSelector<ReturnValue>(
  selector: (state: ApplicationState) => ReturnValue,
  equalityFn?: (left: ReturnValue, right: ReturnValue) => boolean
) {
  return rredux.useSelector<ApplicationState, ReturnValue>(
    selector,
    equalityFn
  );
}

/**
 * Protects content from unauthenticated users
 * @param protect If the user should be forced to the login page
 */
export function useAuth(protect: boolean = true) {
  const navigation = useNavigation();
  const auth = useSelector<AuthDataState>(state => state.auth);

  useEffect(() => {
    if (protect && !auth.auth && !auth.requesting && auth.successful) {
      navigation.navigate("FrontDoor");
    }
  }, [protect, auth.auth, auth.requesting, auth.successful]);

  return auth;
}
