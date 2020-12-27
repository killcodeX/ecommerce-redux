import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "./actionConstant";

import { myFirebase } from "../../firebase/firebase";

//   actions

// for login
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

// for sign up

const requestSignUp = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const receiveSignUp = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
};

const signUpError = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

//  for log out

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

// for verify

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(receiveLogin(user));
    })
    .catch((error) => {
      console.log(error);
      dispatch(loginError());
    });
};

export const signUpUser = (email, password) => (dispatch) => {
  dispatch(requestSignUp());
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(receiveSignUp(user));
    })
    .catch((error) => {
      console.log(error);
      dispatch(signUpError());
    });
};

export const logoutUser = () => (dispatch) => {
  console.log("logout clicked");
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch((error) => {
      console.log(error);
      dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
