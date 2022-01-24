// import { applyMiddleware, compose, createStore } from "redux";
// import { persistStore } from "redux-persist";
// import thunk from "redux-thunk";
// import initialState from "./initial-state";
// import rootReducer from "./reducers/root.reducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );
// export const persistor = persistStore(store);
// export default { store, persistor };

import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
