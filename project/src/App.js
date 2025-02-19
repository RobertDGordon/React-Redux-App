import React from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getData } from './actions';
import Card from './components/Card';
import './App.css';
import SearchBar from './components/SearchBar';
import {SEARCH_UPDATE, CHANGE_IMAGE} from './actions';
import styled from 'styled-components';
import Loading from './components/Loading';

const MainDiv = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
        width: 320px;
    }
  #logo{
    width: 60%;
    @media screen and (max-width: 800px) {
        width: 320px;
    }
  }
  h1{
    margin-top: -30px;
  }
  #launch{
    margin-top: 10px;
  }
`

function App() {

  const dispatch = useDispatch();

  const { isLoading, error, data, flight, image } = useSelector(
    state => ({
      isLoading: state.isLoading,
      error: state.error,
      data: state.data,
      flight: state.flight,
      image: state.image,
    }),
    shallowEqual
  );
  
  const updateSearch = (number) =>{
    // console.log('function click', number)
    dispatch({type: SEARCH_UPDATE, payload: number});
  }
  const changeImage = (number) =>{
    dispatch({type: CHANGE_IMAGE, payload: number});
  }

  return (
    <div className="App">
      <MainDiv>
        <img id='logo' src='https://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png' alt='Space X' />
        <h1>Flight Finder</h1>
        <SearchBar updateSearch={updateSearch} data={data} />
        <div>{data[flight].mission_name === '' ? (<>
            {isLoading ? (<div><Loading/></div>
            ) : (
              <button id='launch' onClick={() => dispatch(getData())}>Launch!</button>
            ) }</>
        ) : (
          <><Card data={data} flight={flight} image={image} changeImage={changeImage} updateSearch={updateSearch}/></>
        ) }
        </div>
        {error && <div>{error}</div>}
      </MainDiv>
    </div>
  );
}

export default App;

// {data[flight].mission_name === '' ?
//               <button onClick={() => dispatch(getData())}>Launch!</button> : 
//               <>{isLoading ? (<div>loading data...</div>) :
//                  (<><Card data={data} flight={flight}/></>)}</> }