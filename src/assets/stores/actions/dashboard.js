import { GET_DASHBOARD, LOADING, baseUrl } from "./types";
import Axios from "axios";

const setToken = () => {
  const local = JSON.parse(localStorage.getItem("userLocal"));
  return {
    headers: {
      Authorization: local ? local.token : false
    }
  };
};

export const ACTION_GET_DASHBOARD = () => {
  return dispatch => {
    console.log("ACTION_GET_DASHBOARD");
    dispatch({ type: LOADING });
    return Axios.get(`${baseUrl}/amount`, setToken())
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_DASHBOARD,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
        return res;
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: LOADING });
        return error;
      });
  };
};
