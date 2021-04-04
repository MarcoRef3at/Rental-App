import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://20.20.1.21:8088/rnt?opr",
  headers: {
    "content-type": "text/json",
  },
});

export default apiClient;
