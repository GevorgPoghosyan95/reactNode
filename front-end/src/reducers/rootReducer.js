import {combineReducers} from "redux";
import reposReducer from "./reposReducer";
import {persistStore,persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    repos:reposReducer
})

export default persistReducer(persistConfig,rootReducer)