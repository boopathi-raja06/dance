import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000/api" : undefined);

const api = axios.create({
  baseURL: apiBaseUrl,
});

export const createEnquiry = (payload) => api.post("/enquiry", payload);
export const fetchEnquiries = () => api.get("/enquiries");
export const deleteEnquiry = (id) => api.delete(`/enquiries/${id}`);
export const markEnquiryContacted = (id) =>
  api.patch(`/enquiries/${id}/contacted`);

export default api;
