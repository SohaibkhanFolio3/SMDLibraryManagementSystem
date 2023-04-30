import request from "./client";

const addCar = async (car, auth_token) => {
  return await request("POST", "cars/", car, auth_token);
};

const getCars = async (auth_token) => {
  return await request("GET", "cars/", {}, auth_token);
};

export default { addCar, getCars };
