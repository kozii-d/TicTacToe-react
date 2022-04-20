
const defaultState = {
    gamefield: [
        null, null, null,
        null, null, null,
        null, null, null
    ]
}

export const gamefieldReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_GAMEFIELD':
            return {...state, gamefield: action.payload}
        case 'RESTART':
            return defaultState;

        default:
            return state;
    }
}
