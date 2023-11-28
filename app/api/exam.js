import axiosInstance from "../utils/axiosInstance";
const baseUrl = "https://node-backend-tvwblrb2za-el.a.run.app";

//Add Exam
export const addExam = async (obj) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/exam`, obj);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Exam
export const getExam = async (id) => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/exam/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Exams
export const getExams = async () => {
  try {
    const resp = await axiosInstance.get(`${baseUrl}/api/v1/exams`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Exam
export const updateExam = async (id) => {
  try {
    const resp = await axiosInstance.post(`${baseUrl}/api/v1/exam/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Exam
export const deleteExam = async (id) => {
  try {
    const resp = await axiosInstance.delete(`${baseUrl}/api/v1/exam/${id}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
