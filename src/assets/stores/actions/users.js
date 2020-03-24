import {
  GET_USERS,
  ADD_USERS,
  DELETE_USERS,
  ROLE_USERS,
  LOADING,
  baseUrl
} from "./types";
import Axios from "axios";
import { message } from "antd";

const local = JSON.parse(localStorage.getItem("userLocal"));
let setToken = {
  headers: {
    Authorization: local ? local.token : false
  }
};

export const ACTION_GET_USERS = () => {
  return dispatch => {
    console.log("ACTION_GET_USERS");
    dispatch({ type: LOADING });
    Axios.get(`${baseUrl}/user/allUser`, setToken)
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_USERS,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_DELETE_USERS = id => {
  return dispatch => {
    console.log("ACTION_DELETE_USERS");
    dispatch({ type: LOADING });
    return Axios.delete(`${baseUrl}/user/${id}`, setToken)
      .then(res => {
        dispatch({
          type: DELETE_USERS,
          payload: id
        });
        dispatch({ type: LOADING });
        message.info("The data was deleted");
        return res;
      })
      .catch(error => {
        dispatch({ type: LOADING });
        return error;
      });
  };
};

export const ACTION_ADD_USERS = input => {
  return dispatch => {
    console.log("ACTION_ADD_USERS");
    dispatch({ type: LOADING });
    return Axios.post(`${baseUrl}/user/`, input, setToken)
      .then(res => {
        dispatch({
          type: ADD_USERS,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
        message.info("A new User has been created");
        console.log(res);
        return res;
      })
      .catch(error => {
        dispatch({ type: LOADING });
        console.log(error);
        return error;
      });
  };
};

export const ACTION_ROLE_USERS = (id, role) => {
  return dispatch => {
    console.log("ACTION_ROLE_USERS");
    dispatch({ type: LOADING });
    return Axios.put(
      `${baseUrl}/user/role/${id}`,
      {
        role: role
      },
      setToken
    )
      .then(res => {
        console.log(res);
        dispatch({
          type: ROLE_USERS,
          payload: res.data.data
        });
        message.info("The role was updated to " + role);
        dispatch({ type: LOADING });
        return res;
      })
      .catch(error => {
        console.log(error);
        // dispatch({
        //   type: ERROR_LOGIN,
        //   payload: error
        // });
        dispatch({ type: LOADING });
      });
  };
};
