import {combineReducers} from "redux";
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  chatHistory:chatReducer
})

export default rootReducer;