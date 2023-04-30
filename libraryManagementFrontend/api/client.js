import axios from "axios";
import { BACKEND_URL } from "@env";

export default request = async (method, endpoint, data, auth_token = null) => {
  let headers = {};
  if (auth_token) {
    headers.Authorization = "Token " + auth_token;
  }
  const res = await axios({
    method: method,
    url: BACKEND_URL + "/api/" + endpoint,
    data: data,
    headers: headers,
  });
  return res.data;
};
