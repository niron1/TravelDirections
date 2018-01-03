import axios from 'axios';
import * as Actions from '../constants/ActionTypes';

export const GetDirections = (googleAPIKey, source,destination, weatherAPIKey) => {
  return (dispatch) => {
    dispatch( { type: Actions.SPINNER_ON});
    axios.get(`/maps/api/directions/json?key=${googleAPIKey}&origin=${source}&destination=${destination}`)
      .then((response) => {
        dispatch({ type: Actions.SPINNER_OFF});


console.log("reponse", response);
        if (typeof response == 'undefined' || !response.data || !response.data.routes || response.data.routes.length === 0) {
          dispatch({type: Actions.GET_DIRECTIONS_ERROR, msg:"no results"})
          return;
        }

        const endLocation = response.data.routes[0].legs[0].end_location;
        dispatch( GetWeather(weatherAPIKey, endLocation.lat, endLocation.lng ) );
        dispatch({ type: Actions.GET_DIRECTIONS_SUCCESS, response })
      }).catch((err) => {
        console.error(err);
        dispatch({type: Actions.GET_DIRECTIONS_ERROR, msg:err})
      })
  }
}

export const GetWeather = (weatherAPIKey, lat, lon) => {
  return (dispatch) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weatherAPIKey}&units=metric`)
      .then((response) => {
        dispatch({ type: Actions.GET_WEATHER_SUCCESS, response })
      }).catch((err) => {
        console.error(err);
        dispatch({type: Actions.GET_WEATHER_ERROR, err})
      })
  }
}
