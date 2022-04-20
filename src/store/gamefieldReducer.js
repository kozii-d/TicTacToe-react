
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
            return {...action.payload}

        default:
            return state;
    }
}
