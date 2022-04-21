import {players} from "../components/App";

const defaultState = {
    activePlayer: players[0]
}

export const activePlayerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTIVE_PLAYER':
            if (state.activePlayer === players[0]) {
                return {...state, activePlayer: [players[1]]}
            }
            if (state.activePlayer === players[1]) {
                return {...state, activePlayer: [players[0]]}
            }
        case 'RESTART':
            return defaultState;

        default:
            return state;
    }
}