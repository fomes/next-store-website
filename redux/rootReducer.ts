import { combineReducers } from "redux";
import cartSlice from "./cart/slice";

const rootReducer = combineReducers({ cartSlice });

export default rootReducer;
