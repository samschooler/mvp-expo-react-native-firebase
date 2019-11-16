import { initializeApp } from "firebase";
import * as constants from "modules/constants";
import * as user from "api/user";

initializeApp(constants.firebase);

export default { user };
