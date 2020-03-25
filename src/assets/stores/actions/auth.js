import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  LOADING,
  ERROR_LOGIN,
  ERROR_UPDATE,
  UPDATE_PROFILE,
  CHANGE_AVATAR,
  baseUrl
} from "./types";
import Axios from "axios";
import { message } from "antd";

export const ACTION_SIGN_UP = input => {
  return dispatch => {
    console.log("ACTION_SIGN_UP");
    dispatch({ type: LOADING });
    Axios.post(`${baseUrl}/user`, input)
      .then(res => {
        console.log(res);
        dispatch({
          type: SIGN_UP,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR_LOGIN,
          payload: error
        });
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_SIGN_IN = input => {
  return dispatch => {
    console.log("ACTION_SIGN_IN");
    dispatch({ type: LOADING });
    Axios.post(`${baseUrl}/user/auth`, input)
      .then(res => {
        console.log(res);
        dispatch({
          type: SIGN_IN,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
        message.info("Welcome Back " + res.data.data.full_name);
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR_LOGIN,
          payload: error
        });
        dispatch({ type: LOADING });
        message.info("Incorrect Email or Password Combination");
      });
  };
};

export const ACTION_RECOVER = input => {
  return dispatch => {
    console.log("ACTION_RECOVER");
    dispatch({ type: LOADING });
    Axios.post(`${baseUrl}/recover`, input)
      .then(res => {
        console.log(res);
        alert(res.data.data.message);
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error.response);
        alert(error.response.data.error.message);
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_SIGN_OUT = () => {
  message.info("Thank you for using our service");
  return {
    type: SIGN_OUT
  };
};

export const ACTION_UPDATE_PROFILE = input => dispatch => {
  const local = JSON.parse(localStorage.getItem("userLocal"));
  let setToken = {
    headers: {
      Authorization: local ? local.token : false
    }
  };
  console.log("ACTION_UPDATE_PROFILE", setToken);
  dispatch({ type: LOADING });
  Axios.put(`${baseUrl}/users`, input, setToken)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data.data
      });
      dispatch({ type: LOADING });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR_UPDATE,
        payload: error
      });
      dispatch({ type: LOADING });
    });
};

export const ACTION_CHANGE_AVATAR = inputFile => dispatch => {
  const local = JSON.parse(localStorage.getItem("userLocal"));
  let setToken = {
    headers: {
      Authorization: local ? local.token : false
    }
  };
  console.log("ACTION_CHANGE_AVATAR", setToken);
  const data = new FormData();
  data.append("image", inputFile);
  dispatch({ type: LOADING });
  Axios.put(`${baseUrl}/users`, data, setToken)
    .then(res => {
      console.log(res);
      dispatch({
        type: CHANGE_AVATAR,
        payload: res.data.data
      });
      dispatch({ type: LOADING });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR_UPDATE,
        payload: error
      });
      dispatch({ type: LOADING });
    });
};
