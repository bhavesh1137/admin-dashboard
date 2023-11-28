import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

//base URL
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Create User
export const createUser = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/user`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete User
export const deleteUser = async (id) => {
  try {
    const resp = await axiosInstance.delete(`${baseUrl}/api/v1/user/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get User
export const getUser = async (id) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/user/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update User
export const updateUser = async (id) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/user/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Users
export const getUsers = async () => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/users`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Onboard a User
export const onboardUser = async (obj) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/user/onboard`,
      obj
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Sign in a User
export const singInUser = async (obj) => {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/user/sign-in`, obj);
    return response.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

//Verify OTP User
export const verifyOTPUser = async (obj) => {
  try {
    const response = await axiosInstance.post(
      `${baseUrl}/api/v1/user/verify-otp`,
      obj
    );
    return response;
  } catch (error) {
    return { error: error.response.data };
  }
};
