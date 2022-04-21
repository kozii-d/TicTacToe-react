import {createAction} from "redux-actions";

export const updateGamefield = createAction('UPDATE_GAMEFIELD', (payload) => ({
    gamefield: payload
}));
export const restart = createAction('RESTART');