import axios from "axios";
import { api } from "../config/api.config";

const prod = true;

const CodexmakerApi = async (
  method,
  path,
  body = null,
  token = null,
  options = null
) => {
  const axiosInstance = await axios.create({
    baseURL: prod ? api.backendProductionUri :api.backendDevelopmentUri,
    timeout: 10000,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  switch (method) {
    case "POST":
      const postData = await axiosInstance
        .post(path, body)
        .then((r) => {
          return r?.data;
        })
        .catch((e) => {
          return e?.response?.data;
        });
      return postData;
    case "GET":
      const getData = await axiosInstance
        .get(path)
        .then(async (r) => {
          return r?.data;
        })
        .catch(async (e) => {
          return e?.response?.data;
        });
      return getData;
    case "PUT":
      const putData = await axiosInstance
        .put(path)
        .then(async (r) => {
          return r?.data;
        })
        .catch(async (e) => {
          return e?.response?.data;
        });
      return putData;
    default:
      break;
  }
};

export default CodexmakerApi;
