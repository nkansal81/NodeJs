import url from "../../api";

const fetchLogin = async (payload) => {
  return await fetch(url.login, {
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

export default fetchLogin;