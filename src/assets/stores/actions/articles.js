import { GET_ARTICLES, DELETE_ARTICLES, LOADING, baseUrl } from "./types";
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

export const ACTION_GET_ARTICLES = () => {
  return dispatch => {
    console.log("ACTION_GET_ARTICLES");
    dispatch({ type: LOADING });
    Axios.get(`${baseUrl}/article`, setToken())
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_ARTICLES,
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

export const ACTION_DELETE_ARTICLES = id => {
  return dispatch => {
    console.log("ACTION_DELETE_ARTICLES");
    dispatch({ type: LOADING });
    return Axios.delete(`${baseUrl}/article?_id=${id}`, setToken())
      .then(res => {
        dispatch({
          type: DELETE_ARTICLES,
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
