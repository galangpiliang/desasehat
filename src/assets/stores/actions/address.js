import {
  GET_ADDRESS,
  GET_ADDRESS_DISTRICT,
  GET_ADDRESS_SUB_DISTRICT,
  GET_ADDRESS_VILLAGE,
  baseUrl
} from "./types";
import Axios from "axios";

const local = JSON.parse(localStorage.getItem("userLocal"));
let setToken = {
  headers: {
    Authorization: local ? local.token : false
  }
};

export const ACTION_GET_ADDRESS = () => {
  return dispatch => {
    console.log("ACTION_GET_ADDRESS");

    // dispatch({ type: LOADING });
    return Axios.get(`${baseUrl}/address`, setToken())
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_ADDRESS,
          payload: res.data.data
        });
        // dispatch({ type: LOADING });
        return res;
      })
      .catch(error => {
        console.log(error);
        // dispatch({ type: LOADING });
        return error;
      });
  };
};

export const ACTION_GET_ADDRESS_DISTRICT = id => {
  return dispatch => {
    console.log("ACTION_GET_ADDRESS_DISTRICT");

    let link = id.slice(0, 2);
    let type = GET_ADDRESS_DISTRICT;

    if (id.length > 2) {
      link += "/" + id.slice(0, 4);
      type = GET_ADDRESS_SUB_DISTRICT;
    }
    if (id.length > 4) {
      link += "/" + id;
      type = GET_ADDRESS_VILLAGE;
    }

    // dispatch({ type: LOADING });
    return Axios.get(`${baseUrl}/address/${link}`, setToken())
      .then(res => {
        console.log(res);
        dispatch({
          type: type,
          payload: res.data.data
        });
        // dispatch({ type: LOADING });
        return res;
      })
      .catch(error => {
        console.log(error);
        // dispatch({ type: LOADING });
        return error;
      });
  };
};
