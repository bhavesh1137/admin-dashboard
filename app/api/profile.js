import axiosInstance from "../api/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app/api/v1";

//Get Profile
export const getProfile = async (id) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/profile/${id}`);
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
    const resp = await axiosInstance.post(`${baseUrl}/profile/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
