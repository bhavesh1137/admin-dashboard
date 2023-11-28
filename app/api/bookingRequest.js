import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Create Booking Request
export const createBookingRequest = async (obj) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/booking-request`,
      obj
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Booking Request
export const deleteBookingRequest = async (id) => {
  try {
    const resp = await axiosInstance.delete(
      `${baseUrl}/api/v1/booking-request/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Booking Request
export const getBookingRequest = async (id) => {
  try {
    const resp = await axiosInstance.get(
      `${baseUrl}/api/v1/booking-request/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Booking Request
export const updateBookingRequest = async (id) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/booking-request/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Booking Request List
export const getBookingRequestList = async () => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/booking-requests`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
