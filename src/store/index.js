import { combineReducers } from "redux";
import { productreducer } from "./reducer";
const appreducer=combineReducers({productreducer})
export default (state,action)=>{
    return appreducer(state,action)
}