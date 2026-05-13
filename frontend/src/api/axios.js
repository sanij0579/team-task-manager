import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-1-ye4b.onrender.com/api/",
});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;