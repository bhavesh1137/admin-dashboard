import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Create Role
export const createRole = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/role`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Role
export const deleteRole = async (id) => {
  try {
    const resp = await axiosInstance.delete(`${baseUrl}/api/v1/role/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Role
export const getRole = async (id) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/role/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Role
export const updateRole = async (id) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/role/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Roles
export const getRoles = async () => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/roles`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
