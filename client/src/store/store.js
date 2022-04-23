import {createStore, combineReducers} from "redux";
import gamefieldReducer from "./gamefield/reducer";
import activePlayerReducer from './activePlayer/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    gamefieldReducer,
    activePlayerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
