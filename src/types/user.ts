import { RequestState } from "./request";

export const AUTH_DATA_REQUEST = "AUTH_DATA_REQUEST";
export const AUTH_DATA_SUCCESS = "AUTH_DATA_SUCCESS";
export const AUTH_DATA_FAILURE = "AUTH_DATA_FAILURE";

export const USER_DATA_REQUEST = "USER_DATA";
export const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
export const USER_DATA_FAILURE = "USER_DATA_FAILURE";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

/* Auth */

export interface AuthDataRequest {
  email: string;
  password: string;
}

export interface AuthDataState extends RequestState {
  auth?: firebase.User;
}

export interface AuthDataRequestAction {
  type: typeof AUTH_DATA_REQUEST;
}

export interface AuthDataSuccessAction {
  type: typeof AUTH_DATA_SUCCESS;
  user: firebase.User;
}

export interface AuthDataFailureAction {
  type: typeof AUTH_DATA_FAILURE;
  error: firebase.auth.Error;
}

export type AuthDataActionTypes =
  | AuthDataRequestAction
  | AuthDataSuccessAction
  | AuthDataFailureAction
  | LogoutSuccessAction;

/* User */

export interface RequiredUser {}

export interface User extends RequiredUser {
  phone?: string;
}

export interface UserDataState extends RequestState {
  user?: User;
}

export interface UserDataRequestAction {
  type: typeof USER_DATA_REQUEST;
}

export interface UserDataSuccessAction {
  type: typeof USER_DATA_SUCCESS;
  user: User;
}

export interface UserDataFailureAction {
  type: typeof USER_DATA_FAILURE;
  error: Error;
}

export type UserDataActionTypes =
  | UserDataRequestAction
  | UserDataSuccessAction
  | UserDataFailureAction
  | LogoutSuccessAction;

/* Login */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: firebase.auth.Error;
}

export type LoginActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutSuccessAction;

/* Registration */

export type RegistrationRequest = LoginRequest & User;

export interface RegistrationRequestAction {
  type: typeof REGISTRATION_REQUEST;
}

export interface RegistrationSuccessAction {
  type: typeof REGISTRATION_SUCCESS;
}

export interface RegistrationFailureAction {
  type: typeof REGISTRATION_FAILURE;
  error: firebase.auth.Error;
}

export type RegistrationActionTypes =
  | RegistrationRequestAction
  | RegistrationSuccessAction
  | RegistrationFailureAction
  | LogoutSuccessAction;

/* Logout */

export interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
  error: firebase.auth.Error;
}

export type LogoutActionTypes =
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;
