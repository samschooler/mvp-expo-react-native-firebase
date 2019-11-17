import * as priv from "./constants.private";
import { RequestState } from "types/request";

export const firebase = priv.firebase;

export const initialRequestState: RequestState = {
  requesting: false,
  successful: false,
  errors: [],
  messages: []
};
