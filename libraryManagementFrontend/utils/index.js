export const formatDate = (dateTime) => {
  return (
    dateTime.getFullYear() +
    "-" +
    (dateTime.getMonth() + 1) +
    "-" +
    dateTime.getDate() +
    " " +
    dateTime.getHours() +
    ":" +
    dateTime.getMinutes() +
    ":" +
    dateTime.getSeconds()
  );
};

export const formatVehicle = (selectedVehicle) => {
  return (
    selectedVehicle.registration_number +
    " " +
    selectedVehicle.make +
    " " +
    selectedVehicle.model
  );
};
