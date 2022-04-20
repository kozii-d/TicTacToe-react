import {PLAYER_X} from "../components/App";

const defaultState = {
    activePlayer: PLAYER_X
}

export const activePlayerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTIVE_PLAYER':
            return {...state, activePlayer: action.payload}

        default:
            return state;
    }
}