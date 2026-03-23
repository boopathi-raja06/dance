import { Link } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import SectionTitle from "../components/SectionTitle";
import {
  featuredClasses,
  testimonials,
} from "../data/siteData";

const highlights = [
  {
    title: "Experienced Trainers",
    text: "Learn from stage performers and certified instructors with class plans built around real progress.",
  },
  {
    title: "Flexible Timings",
    text: "Morning, evening, and weekend batches make it practical for students and working professionals.",
  },
  {
    title: "Affordable Fees",
    text: "Transparent pricing, trial sessions, and batch options that keep training accessible.",
  },
];

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Move with confidence</span>
            <h1>Join the Best Dance Classes</h1>
            <p className="hero-copy">
              Rhythm Rise blends strong technical training, performance-driven practice,
              and a studio culture that works for beginners, kids, and serious dancers.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="button">
                Join Now
              </Link>
              <Link to="/classes" className="button button-secondary">
                Explore Classes
              </Link>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-stat">
              <strong>12+</strong>
              <span>Weekly batches</span>
            </div>
            <div className="hero-stat">
              <strong>4.9/5</strong>
              <span>Student satisfaction</span>
            </div>
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Learners trained</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="About us"
            title="A dance school built for consistency, confidence, and performance"
            description="We help students develop strong foundations while keeping classes energizing, social, and stage-ready."
          />
          <div className="highlights-grid">
            {highlights.map((item) => (
              <article key={item.title} className="card highlight-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted-section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured programs"
            title="Popular classes"
            description="Start with the styles students ask for most."
          />
          <div className="card-grid">
            {featuredClasses.map((danceClass) => (
              <ClassCard key={danceClass.id} danceClass={danceClass} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout-banner">
          <div>
            <span className="eyebrow">Take the next step</span>
            <h2>Ready to train with us?</h2>
            <p>
              Choose a batch, send your enquiry, and our team will help you with
              trial classes, timings, and fee details.
            </p>
          </div>
          <Link to="/contact" className="button">
            Join Now
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Student voices"
            title="Testimonials"
            description="What students and parents say about the studio experience."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="card testimonial-card">
                <p>"{item.review}"</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
