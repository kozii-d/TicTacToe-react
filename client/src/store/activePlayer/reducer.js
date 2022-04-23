import {players} from "../../components/App/App";
import {handleActions} from "redux-actions";
import {restart, toggleActivePlayer} from "./actions";

const defaultState = {
    activePlayer: players[0]
}

// const reducer = (state = defaultState, {type}) => {
//     switch (type) {
//         case 'TOGGLE_ACTIVE_PLAYER':
//             return {
//                 ...state,
//                 activePlayer: state.activePlayer === players[0]
//                     ? players[1]
//                     : players[0]
//             };
//         case 'RESTART':
//             return defaultState;
//
//         default:
//             return state;
//     }
// }
// export default reducer;


const handleToggleActivePlayer = (state) => {
    return {
        ...state,
        activePlayer: state.activePlayer === players[0]
            ? players[1]
            : players[0]
    };
}

const handleRestart = () => {
    return defaultState;
}

export default handleActions({
    [toggleActivePlayer]: handleToggleActivePlayer,
    [restart]: handleRestart

}, defaultState);