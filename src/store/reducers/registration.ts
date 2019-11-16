import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  RegistrationActionTypes
} from "types/user";
import { initialRequestState } from "modules/constants";
import { RequestState } from "types/request";

export default function registration(
  state = initialRequestState,
  action: RegistrationActionTypes
): RequestState {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: "Signing up...", time: new Date() }],
        errors: []
      };

    case REGISTRATION_SUCCESS:
      return {
        errors: [],
        messages: [
          {
            body: `Successfully created account for ${action.response.user.email}`,
            time: new Date()
          }
        ],
        requesting: false,
        successful: true
      };

    case REGISTRATION_FAILURE:
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
