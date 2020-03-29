import {
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  VERIFY_CAMPAIGN,
  LOADING,
  baseUrl
} from "./types";
import Axios from "axios";
import { message } from "antd";

const setToken = () => {
  const local = JSON.parse(localStorage.getItem("userLocal"));
  console.log(local);
  return {
    headers: {
      Authorization: local ? local.token : false
    }
  };
};

export const ACTION_GET_CAMPAIGN = () => {
  return dispatch => {
    console.log("ACTION_GET_CAMPAIGN");
    dispatch({ type: LOADING });
    Axios.get(`${baseUrl}/campaign`, setToken())
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_CAMPAIGN,
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

export const ACTION_DELETE_CAMPAIGN = id => {
  return dispatch => {
    console.log("ACTION_DELETE_CAMPAIGN");
    dispatch({ type: LOADING });
    return Axios.delete(`${baseUrl}/campaign/${id}`, setToken())
      .then(res => {
        dispatch({
          type: DELETE_CAMPAIGN,
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

export const ACTION_VERIFY_CAMPAIGN = (id, status = true) => {
  return dispatch => {
    console.log("ACTION_VERIFY_CAMPAIGN");
    dispatch({ type: LOADING });
    return Axios.put(
      `${baseUrl}/campaign/verify/${id}`,
      {
        status: status ? "verified" : "reject"
      },
      setToken()
    )
      .then(res => {
        dispatch({
          type: VERIFY_CAMPAIGN,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
        message.info("The data was updated");
        return res;
      })
      .catch(error => {
        dispatch({ type: LOADING });
        return error;
      });
  };
};
