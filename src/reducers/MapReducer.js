import * as ActionTypes from '../constants/ActionTypes';

var preloadedState = {
  googleAPIKey: "AIzaSyDdXfJwGwmrcTf5rvZPouMWlaGcoP1EsQY",
  sourceAddress:'',
  destinationAddress:'',
}

export default function mapReducer(state=preloadedState, action) {
  console.log("got action",action);
  switch (action.type) {
    case ActionTypes.CHANGE_SOURCE:
      return {...state,sourceAddress:action.value};

    case ActionTypes.CHANGE_DESTINATION:
      return {...state, destinationAddress:action.value};

    default:
      return state;
  }
}