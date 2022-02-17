import axios from "axios";

const userLogin = async (credentials) => {
  const response = await axios.post(
    'http://localhost:8080/api/user/login',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );
  console.log(response)
  return response.data;
};

const userSignUp = async (credentials) => {
  const response = await axios.post(
    'http://localhost:8080/api/user/signup',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );
  return response.data;
};

export {userLogin, userSignUp}