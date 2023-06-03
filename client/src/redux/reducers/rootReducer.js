import {combineReducers} from "redux"
import blogReducer from "./blogReducer"

const rootRedcuer = combineReducers({
    blog: blogReducer,
})

export default rootRedcuer;