import axios from "axios";

export const DATA_REQUEST = "DATA_REQUEST";
export const DATA_RECEIVED = "DATA_RECEIVED";
export const DATA_ERROR = "DATA_ERROR";

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchData = () => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  return axios
    .get(url)
    .then((res) => dispatch({ type: DATA_RECEIVED, payload: res.data }))
    .catch((error) => dispatch({ type: DATA_ERROR, error }));
};
