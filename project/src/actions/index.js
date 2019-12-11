import axios from 'axios'

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const getData = () => dispatch => {
  console.log('dispatch',dispatch);
  dispatch({ type: DATA_LOAD_START });
  axios.get('')
  .then(res => dispatch({type: DATA_LOAD_SUCCESS, payload: {name: res.data.value}}))
  .catch(err => console.log(err))
};
