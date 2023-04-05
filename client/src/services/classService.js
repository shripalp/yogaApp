import axios from "axios";
const baseUrl = "/api/classes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getAllEvents = () => {
  const request = axios.get(`${baseUrl}/upload`);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const upload = async (newObject) => {
  const response = await axios.post(`${baseUrl}/upload`, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const classService = {
  getAll: getAll,
  getAllEvents: getAllEvents,
  create: create,
  update: update,
  remove: remove,
  upload: upload,
};

export default classService;
