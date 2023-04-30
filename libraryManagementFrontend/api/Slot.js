import request from "./client";
import { formatDate } from "../utils";

const getAvailableSlots = async (startTime, endTime, auth_token) => {
  console.log(formatDate(startTime));
  return await request(
    "GET",
    `get_available_slots?start_time=${formatDate(
      startTime
    )}&end_time=${formatDate(endTime)}`,
    {},
    auth_token
  );
};

export default { getAvailableSlots };
