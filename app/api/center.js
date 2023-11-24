import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app/api/v1";

//Add Center
export const addCenter = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/center`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Center
export const deleteCenter = async (id) => {
  try {
    const resp = await axiosInstance.delete(`${baseUrl}/center/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Center
export const getCenter = async (id) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/center/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Center
export const updateCenter = async (id) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/center/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Center List
export const getCenterList = async () => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/centers`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Onboard Center
export const onboardUser = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/center/onboard`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
