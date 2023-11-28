import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Add Center
export const addCenter = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/center`, obj);
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
    const resp = await axiosInstance.delete(`${baseUrl}/api/v1/center/${id}`);
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
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/center/${id}`);
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
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/center/${id}`);
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
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/centers`);
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
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/center/onboard`,
      obj
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
