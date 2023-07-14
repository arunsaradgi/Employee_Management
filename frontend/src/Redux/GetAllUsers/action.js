import axios from "axios";
import {
  GETALLUSERS_FAILURE,
  GETALLUSERS_REQUEST,
  GETALLUSERS_SUCCESS,
} from "../actionTypes";

export const actionGetUsers = () => {
  return { type: GETALLUSERS_REQUEST };
};
export const actionGetUsersSuccess = (payload) => {
  return { type: GETALLUSERS_SUCCESS, payload };
};
export const actionGetUsersFailure = () => {
  return { type: GETALLUSERS_FAILURE };
};

export const getUsers = () => (dispatch) => {
  dispatch(actionGetUsers());
  axios
    .get("http://localhost:4500/users")
    .then((res) => {
      //   console.log(res.data.users); 
      dispatch(actionGetUsersSuccess(res.data.users));
    })
    .catch((err) => dispatch(actionGetUsersFailure()));
};
