import React from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getData } from './actions'
import './App.css';

function App() {

  const dispatch = useDispatch();

  const { isLoading, error, data } = useSelector(
    state => ({
      isLoading: state.isLoading,
      error: state.error,
      data: state.data
    }),
    shallowEqual
  );

  return (
    <div className="App">
      <button onClick={() => dispatch(getData())}>Launch!</button>
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>loading data...</div>
      ) : (
        <div>Data Name:{data.name}</div>
      )}
    </div>
  );
}

export default App;
