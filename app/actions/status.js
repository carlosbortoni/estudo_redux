import { actionTypes } from '../constants/actionTypes.js';

export const changeStatus = userName => ({
  type: actionTypes.CHANGE_STATUS,
  payload: `${userName} is typing`
});