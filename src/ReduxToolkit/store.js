import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from "./slices/counterSlice";

const { combineReducers } = require("redux");

const reducers = combineReducers({
    counter : counterSlice
})

export default configureStore({reducer: reducers, middleware: [logger]})