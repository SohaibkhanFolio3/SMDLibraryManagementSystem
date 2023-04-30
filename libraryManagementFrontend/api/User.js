import request from "./client";

const login = async (username, password) => {
  return await request("POST", "login", { username, password });
};

const signup = async (first_name, last_name, email, password, mobile) => {
  return await request("POST", "signup", {
    first_name,
    last_name,
    email,
    password,
    mobile,
  });
};

const addBalance = async (balance, auth_token) => {
  return await request(
    "POST",
    "add_balance",
    {
      balance,
    },
    auth_token
  );
};

export default { login, signup, addBalance };
