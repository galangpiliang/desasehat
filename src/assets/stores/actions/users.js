import { GET_USERS } from "./types";
import Axios from "axios";
const baseUrl = "https://desasehatg.herokuapp.com/api";

const local = JSON.parse(localStorage.getItem("userLocal"));
let setToken = {
  headers: {
    Authorization: local ? local.token : false
  }
};

export const ACTION_GET_USERS = () => {
  return dispatch => {
    console.log("ACTION_GET_USERS");
    // dispatch({ type: LOADING });
    Axios.get(`${baseUrl}/user/allUser`, setToken)
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_USERS,
          payload: res.data.data
        });
        // dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        // dispatch({
        //   type: ERROR_LOGIN,
        //   payload: error
        // });
        // dispatch({ type: LOADING });
      });
  };
};
