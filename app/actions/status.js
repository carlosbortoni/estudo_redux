import { actionTypes } from '../constants/actionTypes.js';

export const changeStatus = text => 
    dispatch =>
        setTimeout(() => 
            dispatch({
                type: actionTypes.CHANGE_STATUS,
                payload: text
            })
        , 1000);

// import { actionTypes } from '../constants/actionTypes.js';

// export const changeStatus = userName => ({
//   type: actionTypes.CHANGE_STATUS,
//   payload: `${userName} is typing`
// });