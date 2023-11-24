import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app/api/v1";

//Create User
export const createUser = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/user`, obj);
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
    const resp = await axiosInstance.delete(`${baseUrl}/user/${id}`);
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
    const resp = await axiosInstance.get(`${baseUrl}/user/${id}`);
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
    const resp = await axiosInstance.post(`${baseUrl}/user/${id}`);
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
    const resp = await axiosInstance.get(`${baseUrl}/users`);
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
    const resp = await axiosInstance.post(`${baseUrl}/user/onboard`, obj);
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
    const resp = await axiosInstance.post(`${baseUrl}/user/sign-in`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Verify OTP User
export const verifyOTPUser = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/user/verify-otp`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
