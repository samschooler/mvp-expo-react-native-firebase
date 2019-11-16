import {
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
  UserDataActionTypes,
  UserDataState
} from "types/user";
import { initialRequestState } from "modules/constants";

export default function user(
  state = initialRequestState,
  action: UserDataActionTypes
): UserDataState {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [],
        errors: []
      };

    case USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.user,
        errors: [],
        messages: [],
        requesting: false,
        successful: true
      };

    case USER_DATA_FAILURE:
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

    default:
      return state;
  }
}
