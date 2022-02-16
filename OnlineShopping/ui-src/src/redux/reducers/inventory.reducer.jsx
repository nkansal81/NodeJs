import * as actionType from "../actions";

const inventoryReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.INVENTORY:
            return {
                ...state,
                tableData: action.tableData
            }
        default:
            return state
    }
}
export default inventoryReducer;

// import { brandSubBrandActionTypes } from "../actions/brandSubBrand.actions";

// export default function brandSubBrandReducer(state = null, action) {
//   switch (action.type) {
//     case brandSubBrandActionTypes.FETCH_BRANDSUBBRAND_DATA_SUCCESS:
//       return { ...state, brand: action.data };
//     case brandSubBrandActionTypes.FETCH_SUBBRAND_DATA_SUCCESS:
//       return { ...state, subBrand: action.data };
//     default:
//       return state;
//   }
// }