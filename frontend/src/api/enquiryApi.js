import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const createEnquiry = (payload) => api.post("/enquiry", payload);
export const fetchEnquiries = () => api.get("/enquiries");
export const deleteEnquiry = (id) => api.delete(`/enquiries/${id}`);
export const markEnquiryContacted = (id) =>
  api.patch(`/enquiries/${id}/contacted`);

export default api;
