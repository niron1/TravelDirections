import * as types from '../constants/ActionTypes';

export const changeSource = (value) =>
({
  type: types.CHANGE_SOURCE,
  value: value
})

export const changeDestination = (value) =>
({
  type: types.CHANGE_DESTINATION,
  value: value
})

export const resetDirections = () =>
({
  type: types.RESET_DIRECTIONS
})