import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app/api/v1";

//Create Booking Request
export const createBookingRequest = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/booking-request`, obj);
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
    const resp = await axiosInstance.delete(`${baseUrl}/booking-request/${id}`);
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
    const resp = await axiosInstance.get(`${baseUrl}/booking-request/${id}`);
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
    const resp = await axiosInstance.post(`${baseUrl}/booking-request/${id}`);
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
    const resp = await axiosInstance.get(`${baseUrl}/booking-requests`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
