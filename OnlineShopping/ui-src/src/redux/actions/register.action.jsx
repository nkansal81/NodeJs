import url from "../../api";

const register = async (payload) => {
//   let headers = {};
//   headers.Authorization = `Bearer ${token}`;
  return await fetch(url.register, {
    method: "POST",
    headers: {
        'Content-Type':'application/json'
    },    
    body: JSON.stringify(payload),
  })
    .then((response) =>
      response.json().then((res) => {
        const token = res.data;
        return token;
      })
    )
    .catch((err) => console.log(err));
};

export default register;