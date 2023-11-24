import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app/api/v1";

//Add Lab
export const addLab = async (obj, centerId) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/${centerId}/lab`, obj);
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
      `${baseUrl}/${centerId}/lab/${labId}`
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
    const resp = await axiosInstance.get(`${baseUrl}/${centerId}/lab/${labId}`);
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
      `${baseUrl}/${centerId}/lab/${labId}`
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
    const resp = await axiosInstance.get(`${baseUrl}/${centerId}/labs`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
