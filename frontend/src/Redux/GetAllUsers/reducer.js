import {
  GETALLUSERS_FAILURE,
  GETALLUSERS_REQUEST,
  GETALLUSERS_SUCCESS,
} from "../actionTypes";

const init = {
  isLoading: false,
  isError: false,
  users: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETALLUSERS_REQUEST:
      return { ...state, isLoading: true };

    case GETALLUSERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };

    case GETALLUSERS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
