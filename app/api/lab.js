import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Add Lab
export const addLab = async (obj, centerId) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/${centerId}/lab`,
      obj
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Lab
export const deleteLab = async (labId, centerId) => {
  try {
    const resp = await axiosInstance.delete(
      `${baseUrl}/api/v1/${centerId}/lab/${labId}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Lab
export const getLab = async (labId, centerId) => {
  try {
    const resp = await axiosInstance.get(
      `${baseUrl}/api/v1/${centerId}/lab/${labId}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Lab
export const updateLab = async (labId, centerId) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/${centerId}/lab/${labId}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Lab List
export const getLabList = async (centerId) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/${centerId}/labs`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
