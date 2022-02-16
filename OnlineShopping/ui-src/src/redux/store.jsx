import rootReducer from './reducer';
import thunk from "redux-thunk";
import initialState from './selector/initialState';
import { applyMiddleware, compose, createStore } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
