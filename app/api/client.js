import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://20.20.1.21:8088/rnt?opr",
  headers: {
    "content-type": "text/json",
  },
});

export const geoLocationClient = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api`,
  headers: {
    "content-type": "text/json",
  },
  params: {
    key: "AIzaSyCEL0WT7h4x_ojKGDhBxLRWv01Oy89nV-4",
  },
});

export default apiClient;
