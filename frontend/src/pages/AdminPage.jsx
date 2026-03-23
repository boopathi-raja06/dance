import { useEffect, useState } from "react";
import {
  deleteEnquiry,
  fetchEnquiries,
  markEnquiryContacted,
} from "../api/enquiryApi";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionTitle from "../components/SectionTitle";
import StatusBanner from "../components/StatusBanner";

function AdminPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({ type: "info", message: "" });

  const loadEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetchEnquiries();
      setEnquiries(response.data);
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Unable to fetch enquiries.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEnquiry(id);
      setEnquiries((current) => current.filter((item) => item._id !== id));
      setFeedback({ type: "success", message: "Enquiry deleted." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Unable to delete enquiry.",
      });
    }
  };

  const handleMarkContacted = async (id) => {
    try {
      const response = await markEnquiryContacted(id);
      setEnquiries((current) =>
        current.map((item) => (item._id === id ? response.data : item))
      );
      setFeedback({ type: "success", message: "Enquiry marked as contacted." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Unable to update enquiry.",
      });
    }
  };

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Admin dashboard"
            title="Latest student enquiries"
            description="Track registrations, follow up quickly, and keep outreach organized."
          />
        </div>
      </section>

      <section className="section admin-section">
        <div className="container">
          <StatusBanner type={feedback.type} message={feedback.message} />

          {loading ? (
            <LoadingSpinner label="Loading enquiries..." />
          ) : (
            <div className="table-wrap">
              <table className="schedule-table admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Class</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.length > 0 ? (
                    enquiries.map((item) => (
                      <tr key={item._id}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Phone">{item.phone}</td>
                        <td data-label="Class">{item.selectedClass}</td>
                        <td data-label="Message">{item.message || "No message"}</td>
                        <td data-label="Date">{new Date(item.createdAt).toLocaleString()}</td>
                        <td data-label="Status">
                          <span className={item.contacted ? "status-pill success" : "status-pill"}>
                            {item.contacted ? "Contacted" : "Pending"}
                          </span>
                        </td>
                        <td data-label="Actions" className="action-cell">
                          <button
                            type="button"
                            className="button button-small"
                            disabled={item.contacted}
                            onClick={() => handleMarkContacted(item._id)}
                          >
                            Mark Contacted
                          </button>
                          <button
                            type="button"
                            className="button button-secondary button-small"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="empty-state">
                        No enquiries available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default AdminPage;
