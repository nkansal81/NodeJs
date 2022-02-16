import url from "../../api";
import { INVENTORY } from "../actions";
import fetchLogin from "./login.action";

const fetchInventoryData = (data) => {
  return {
    type: INVENTORY,
    tableData: data,
  };
};

export const fetchInventoryDataAction = 
  (token) => async (dispatch) => {
    let headers = {};
    if(token){
        headers.Authorization = `Bearer ${token}`;
    }
    return await fetch(url.productList, {
      method: "GET",
      headers: headers,   
      // body: JSON.stringify(payload),
    })
      .then((response) =>
        response.json().then((res) => {
          console.log("resData",res.data);
          // return dispach({
          //   type: INVENTORY,
          //   tableData: res.data,
          // })
          dispatch(fetchInventoryData(res.data));
          // return products;
        })
      )
      .catch((err) => console.log(err));

};

export default fetchInventoryDataAction;