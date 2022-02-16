import ageReducer from "./reducers/age.reducer";
import inventoryReducer from "./reducers/inventory.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    ageReducer,
    inventoryReducer
});

export default rootReducer;