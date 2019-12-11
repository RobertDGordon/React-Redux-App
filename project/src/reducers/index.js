import {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
  } from "../actions";
  
  const intializeData = () =>{
    let arr = []
    for(let i = 0; i < 104; i++){
        // console.log(i)
        arr = [...arr, {flight_number: i+1, details: '', mission_name:'', launch_date_unix: 0, links: {flickr_images:[]} }]
    }
    console.log(arr)
    return arr
  }
  

  const initialState = {
    isLoading: false,
    error: "",
    data: intializeData()
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOAD_START:
        return {
          ...state,
          isLoading: true
        };
      case DATA_LOAD_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case DATA_LOAD_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  