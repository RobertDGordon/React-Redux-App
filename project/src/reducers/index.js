import {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE,
    SEARCH_UPDATE,
    CHANGE_IMAGE
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
    data: intializeData(),
    flight: 84,
    image: 0
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
      case SEARCH_UPDATE:
        //   console.log('search update', action.payload)
        return {
          ...state,
          flight: action.payload,
          image: 0,
          isLoading: false
        };
      case CHANGE_IMAGE:
          console.log('change image', action.payload)
        return {
            ...state,
            image: action.payload,
            isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  