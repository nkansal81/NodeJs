import url from "../../api";

const inventory = async (token) => {
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
        const products = res.data;
        return products;
      })
    )
    .catch((err) => console.log(err));

};

export default inventory;