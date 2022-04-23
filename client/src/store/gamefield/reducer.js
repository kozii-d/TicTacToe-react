import {handleActions} from "redux-actions";
import {updateGamefield} from "./actions";
import {restart} from "../activePlayer/actions";

const defaultState = {
    gamefield: [
        null, null, null,
        null, null, null,
        null, null, null
    ]
}

// const reducer = (state = defaultState, {type, payload}) => {
//     switch (type) {
//         case 'UPDATE_GAMEFIELD':
//             return {...state, gamefield: payload}
//         case 'RESTART':
//             return defaultState;
//
//         default:
//             return state;
//     }
// }
//
// export default reducer;

const handleUpdateGamefield = (state = defaultState, {payload}) => {
    console.log()
    return {...state, gamefield: payload.gamefield}
}

const handleRestart = () => {
    return defaultState;
}

export default handleActions({
    [updateGamefield]: handleUpdateGamefield,
    [restart]: handleRestart

}, defaultState)
