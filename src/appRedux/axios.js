import axios from "axios";
// import Cookies from "js-cookie";
// import { useAuthContext } from '../hooks/useAuthContext'

const api = axios.create({
  baseURL: "https://reekaexperiments-996956142608.us-central1.run.app/",
});

// api.interceptors.request.use((config) => {

//   let token = Cookies.get("token");

//   if (token) {
//     config.headers.Authorization = `Token ${token}`;
//   }

//   return config;
// });

export default api;
