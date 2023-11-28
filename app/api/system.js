import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Add Systems
export const addSystem = async (obj, labId) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/${labId}/system`,
      obj
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete System
export const deleteSystem = async (labId, id) => {
  try {
    const resp = await axiosInstance.delete(
      `${baseUrl}/api/v1/${labId}/system/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get System
export const getSystem = async (labId, id) => {
  try {
    const resp = await axiosInstance.get(
      `${baseUrl}/api/v1/${labId}/system/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update System
export const updateSystem = async (labId, id) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/${labId}/system/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Lab List
export const getSystemList = async (labId) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/${labId}/systems`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
