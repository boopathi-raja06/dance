import { useState } from "react";
import StatusBanner from "../components/StatusBanner";
import { createEnquiry } from "../api/enquiryApi";
import { classOptions } from "../data/siteData";

const initialForm = {
  name: "",
  phone: "",
  selectedClass: "",
  message: "",
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "info", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: "info", message: "" });

    try {
      await createEnquiry(formData);
      setFeedback({
        type: "success",
        message: "Registration submitted successfully. Our team will contact you shortly.",
      });
      setFormData(initialForm);
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Unable to submit enquiry right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="contact-layout">
            <div>
              <span className="eyebrow">Contact & registration</span>
              <h1>Book your batch or ask for a trial class</h1>
              <p>
                Share your preferred class and contact details. We will help with
                timings, fees, and batch placement.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20register%20for%20a%20dance%20class."
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Contact
              </a>
            </div>

            <form className="card form-card" onSubmit={handleSubmit}>
              <StatusBanner type={feedback.type} message={feedback.message} />

              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />
              </label>

              <label>
                Selected Class
                <select
                  name="selectedClass"
                  value={formData.selectedClass}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a class</option>
                  {classOptions.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us your preferred batch, experience level, or any questions"
                  rows="4"
                />
              </label>

              <button type="submit" className="button" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card contact-info-card">
            <h2>Visit the studio</h2>
            <p>
              Rhythm Rise Dance School
              <br />
              21 Studio Lane, Indiranagar
              <br />
              Bengaluru, Karnataka 560038
            </p>
            <p>
              Phone: +91 98765 43210
              <br />
              Email: hello@rhythmrise.com
            </p>
          </div>

          <div className="map-frame card">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Indiranagar%20Bengaluru&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
