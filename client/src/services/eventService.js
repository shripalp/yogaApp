import axios from "axios";
const baseUrl = "/api/events";

const getAllEvents = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const upload = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};
const removeEvent = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const eventService = {
  getAllEvents: getAllEvents,
  upload: upload,
  removeEvent: removeEvent,
};

export default eventService;
