import reducers from "store/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware, ThunkDispatch } from "redux-thunk";
import { sync } from "./actions/user";
import { ApplicationState, RootAction } from "types/store";

export const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware<
      ThunkDispatch<ApplicationState, null, RootAction>,
      ApplicationState
    >(thunk)
  );

  store.dispatch(sync());

  return store;
};
