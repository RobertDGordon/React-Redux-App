import axios from 'axios'

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const getData = () => dispatch => {
//   console.log('dispatch',dispatch);
  dispatch({ type: DATA_LOAD_START });
  axios.get('https://api.spacexdata.com/v3/launches/')
  .then(res => dispatch({type: DATA_LOAD_SUCCESS, payload: res.data}))
  .catch(err => console.log(err))
};
