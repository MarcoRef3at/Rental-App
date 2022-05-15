import axios from "axios";
import config from "../config";
const apiClient = axios.create({
  baseURL: "http://41.196.0.66:8088/Rnt?opr",
  headers: {
    "content-type": "text/json"
  }
});

export const geoLocationClient = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api`,
  headers: {
    "content-type": "text/json"
  },
  params: {
    key: config.googleMapsKey
  }
});

export default apiClient;
