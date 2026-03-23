import { useState } from "react";
import ClassCard from "../components/ClassCard";
import SectionTitle from "../components/SectionTitle";
import { classOptions, faqs } from "../data/siteData";

const filters = ["All", "Kids", "Beginners", "Advanced"];

function ClassesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClasses =
    activeFilter === "All"
      ? classOptions
      : classOptions.filter((item) => item.category === activeFilter);

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Programs"
            title="Dance classes for every age and skill level"
            description="Browse studio programs and choose the batch that fits your goals."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "filter-chip active-chip" : "filter-chip"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {filteredClasses.map((danceClass) => (
              <ClassCard key={danceClass.id} danceClass={danceClass} />
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted-section">
        <div className="container">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions"
            description="A quick overview before you enquire."
          />

          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="card faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassesPage;
