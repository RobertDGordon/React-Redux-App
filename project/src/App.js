import React from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getData } from './actions';
import Card from './components/Card';
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
      {data[0].mission_name !== undefined ?
      (<>{isLoading ? (<div>loading data...</div>) : (<><Card data={data}/></>)}</>) : (<>Click to launch</>) }
      
    </div>
  );
}

export default App;
