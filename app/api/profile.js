import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Get Profile
export const getProfile = async (id) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/profile/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Profile
export const updateProfile = async (id) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/profile/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
