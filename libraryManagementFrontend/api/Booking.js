import request from "./client";

const addBooking = async (booking, auth_token) => {
  return await request("POST", "bookings/", booking, auth_token);
};

const getBookings = async (auth_token) => {
  return await request("GET", "bookings/", {}, auth_token);
};

export default { addBooking, getBookings };
