import axios from "axios";
const baseUrl = "/api/classes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const classService = {
  getAll: getAll,
};

export default classService;
