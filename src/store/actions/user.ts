import firebase from "firebase";
import "@firebase/firestore";
import * as userTypes from "types/user";
import { ThunkResult } from "types/store";
import api from "api/index";
import { ActionCreator } from "redux";

export const sync: ActionCreator<ThunkResult<void>> = () => dispatch => {
  dispatch({
    type: userTypes.AUTH_DATA_REQUEST
  });

  firebase.auth().onAuthStateChanged(
    user => {
      dispatch({
        type: userTypes.AUTH_DATA_SUCCESS,
        user
      });

      if (user) {
        dispatch(syncUserData(user.uid));
      }
    },
    error => {
      dispatch({
        type: userTypes.AUTH_DATA_FAILURE,
        error
      });
    }
  );
};

const syncUserData: ActionCreator<ThunkResult<void>> = (
  uid: string
) => dispatch => {
  dispatch({
    type: userTypes.USER_DATA_REQUEST
  });

  return firebase
    .firestore()
    .collection("person")
    .doc(uid)
    .onSnapshot(
      snapshot =>
        dispatch({
          type: userTypes.USER_DATA_SUCCESS,
          user: snapshot.data() as userTypes.User
        }),
      error =>
        dispatch({
          type: userTypes.USER_DATA_FAILURE,
          error
        })
    );
};

export const login: ActionCreator<ThunkResult<void>> = (
  request: userTypes.LoginRequest
) => async dispatch => {
  console.log("login");
  dispatch({ type: userTypes.LOGIN_REQUEST });

  try {
    await api.user.login(request);

    dispatch({
      type: userTypes.LOGIN_SUCCESS
    });
  } catch (error) {
    console.log("loginError", error);
    dispatch({
      type: userTypes.LOGIN_FAILURE,
      error: error as firebase.auth.Error
    });
  }
};

export const register: ActionCreator<ThunkResult<void>> = (
  request: userTypes.RegistrationRequest
) => async dispatch => {
  dispatch({
    type: userTypes.REGISTRATION_REQUEST
  });

  try {
    await api.user.register(request);

    dispatch({
      type: userTypes.REGISTRATION_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: userTypes.REGISTRATION_FAILURE,
      error: error as firebase.auth.Error
    });
  }
};

export const logout: ActionCreator<ThunkResult<
  void
>> = () => async dispatch => {
  dispatch({ type: userTypes.LOGOUT_REQUEST });

  try {
    await api.user.logout();

    dispatch({ type: userTypes.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: userTypes.LOGOUT_FAILURE,
      error: error as firebase.auth.Error
    });
  }
};
