import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { Reducers } from "./reducers";

const initialState = {};
const middleware = [logger, thunk];

export const store = createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
