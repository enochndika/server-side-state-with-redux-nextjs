import * as constant from "../components/taskActions";
import { HYDRATE } from "next-redux-wrapper";

const taskReducer = (
  state = {
    users: null,
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case constant.DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case constant.DATA_RECEIVED:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
      };
    case constant.DATA_ERROR:
      return {
        ...state,
        users: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default taskReducer;
