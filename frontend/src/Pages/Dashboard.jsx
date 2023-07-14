import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/GetAllUsers/action";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.userReducer.users);

  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <>USERS</>;
};
