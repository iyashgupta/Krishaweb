import { combineReducers } from "redux";
import { reducer} from "../reducer/reducer";

export const RootReducer=combineReducers({
    reducer:reducer
})