import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
import axios from "axios";

export const actionRequestLogin = () => {
  return { type: LOGIN_REQUEST };
};
export const actionRequestSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const actionRequestFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const login = (creds) => (dispatch) => {
  dispatch(actionRequestLogin());
  return axios
    .post("http://localhost:4500/users/login", creds)
    .then((res) => dispatch(actionRequestSuccess(res.data.token)))
    .catch((err) => dispatch(actionRequestFailure()));
};

export const signup = (creds) => (dispatch) => {
  axios
    .post("http://localhost:4500/users/signup", creds)
    .then((res) => console.log(res.data.user))
    .catch((err) => console.log(err));
};

