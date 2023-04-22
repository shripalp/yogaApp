import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const blogService = {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
  getOne: getOne,
};

export default blogService;
