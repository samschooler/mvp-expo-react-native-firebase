import React from "react";
import { T, SafeAreaBlock } from "components/Block";
import { AuthDataState, UserDataState } from "types/user";
import {
  useNavigation,
  useSelector,
  useAuth,
  useDispatch
} from "modules/hooks";
import { logout } from "store/actions/user";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { auth } = useAuth();
  const { user } = useSelector<UserDataState>(state => state.user);

  setTimeout(() => dispatch(logout()), 1000);

  return (
    <SafeAreaBlock backgroundColor="background" flex>
      <T color="textPrimary" type="body1">
        Data: {auth?.email}
      </T>
    </SafeAreaBlock>
  );
};

export default Home;
