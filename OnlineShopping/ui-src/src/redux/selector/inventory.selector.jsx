export const allProductSelector = (state) =>
    state.inventoryReducer.tableData ? state.inventoryReducer.tableData : [];


