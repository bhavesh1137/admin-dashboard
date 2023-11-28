import axiosInstance from "../utils/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Add Venue Partner
export const addVenuePartner = async (obj) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/venue-partner`,
      obj
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Venue Partner
export const deleteVenuePartner = async (id) => {
  try {
    const resp = await axiosInstance.delete(
      `${baseUrl}/api/v1/venue-partner/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Venue Partner
export const getExam = async (id) => {
  try {
    const resp = await axiosInstance.get(
      `${baseUrl}/api/v1/venue-partner/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Venue Partner
export const updateVenuePartner = async (id) => {
  try {
    const resp = await axiosInstance.post(
      `${baseUrl}/api/v1/venue-partner/${id}`
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Venue Partners
export const getExams = async () => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/venue-partners`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
