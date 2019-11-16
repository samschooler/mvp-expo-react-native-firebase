import { RequestState } from "./request";
import {
  UserDataState,
  UserDataActionTypes,
  AuthDataActionTypes,
  LoginActionTypes,
  RegistrationActionTypes,
  LogoutActionTypes,
  AuthDataState
} from "./user";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type RootAction =
  | AuthDataActionTypes
  | UserDataActionTypes
  | LoginActionTypes
  | RegistrationActionTypes
  | LogoutActionTypes;

export interface ApplicationState {
  readonly auth: AuthDataState;
  readonly user: UserDataState;
  readonly login: RequestState;
  readonly registration: RequestState;
}

export type Dispatch = ThunkDispatch<ApplicationState, null, RootAction>;
export type ThunkResult<R> = ThunkAction<R, ApplicationState, null, RootAction>;
