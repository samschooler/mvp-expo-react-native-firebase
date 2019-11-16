import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LoginActionTypes
} from "types/user";
import { initialRequestState } from "modules/constants";
import { RequestState } from "types/request";

export default function login(
  state = initialRequestState,
  action: LoginActionTypes
): RequestState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: "Logging in...", time: new Date() }],
        errors: []
      };

    case LOGIN_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true
      };

    case LOGIN_FAILURE:
      return {
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ]),
        messages: [],
        requesting: false,
        successful: false
      };

    default:
      return state;
  }
}
