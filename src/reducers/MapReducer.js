import * as ActionTypes from '../constants/ActionTypes';

var preloadedState = {
  googleAPIKey: "AIzaSyDdXfJwGwmrcTf5rvZPouMWlaGcoP1EsQY",
  weatherAPIKey: "9815c3b6893cf9bda3e491e62fbf0eac",
  sourceAddress:'tel aviv',
  destinationAddress:'haifa',
  directions: null,
  weather: null,
  spinner:false,
  error:false,
  errorMessage:'',
}

export default function mapReducer(state=preloadedState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SOURCE:
      return {...state,sourceAddress:action.value};

    case ActionTypes.CHANGE_DESTINATION:
      return {...state, destinationAddress:action.value};

    case ActionTypes.GET_DIRECTIONS_SUCCESS:
      return {...state, directions:action.response}

    case ActionTypes.GET_DIRECTIONS_ERROR:
    console.log("Got action",action);
      return {...state, error:true, errorMessage: action.msg, directions:"no results"}

    case ActionTypes.GET_WEATHER_SUCCESS:
      return {...state, weather:action.response}

    case ActionTypes.GET_WEATHER_ERROR:
      return state;

    case ActionTypes.RESET_DIRECTIONS:
      return {...state, directions:null, error:false};

    case ActionTypes.SPINNER_ON:
      return {...state, spinner: true}

    case ActionTypes.SPINNER_OFF:
      return {...state, spinner: false}

    default:
      return state;
  }
}
