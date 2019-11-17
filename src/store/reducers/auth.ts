import {
  AUTH_DATA_REQUEST,
  AUTH_DATA_SUCCESS,
  AUTH_DATA_FAILURE,
  LOGOUT_SUCCESS,
  AuthDataActionTypes,
  AuthDataState
} from "types/user";
import { initialRequestState } from "modules/constants";

export default function auth(
  state = initialRequestState,
  action: AuthDataActionTypes
): AuthDataState {
  switch (action.type) {
    case AUTH_DATA_REQUEST:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [],
        errors: []
      };

    case AUTH_DATA_SUCCESS:
      return {
        ...state,
        auth: action.user,
        errors: [],
        messages: [],
        requesting: false,
        successful: true
      };

    case AUTH_DATA_FAILURE:
      return {
        ...state,
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
    case LOGOUT_SUCCESS:
      return initialRequestState;

    default:
      return state;
  }
}
