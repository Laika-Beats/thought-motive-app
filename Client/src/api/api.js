import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchMotives = () => API.get("/motives");
export const createMotive = (newMotive) => API.post("/motives", newMotive);
export const deleteMotive = (id) => API.delete(`/motives/${id}`);
export const updateMotive = (id, updatedMotive) =>
  API.patch(`/motives/${id}`, updatedMotive);
