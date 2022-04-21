import {createStore, combineReducers} from "redux";
import {gamefieldReducer} from "./gamefieldReducer";
import {activePlayerReducer} from  './activePlayerReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    gamefieldReducer,
    activePlayerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
