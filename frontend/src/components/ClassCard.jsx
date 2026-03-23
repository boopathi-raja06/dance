import { Link } from "react-router-dom";

function ClassCard({ danceClass }) {
  return (
    <article className="card class-card">
      <img src={danceClass.image} alt={danceClass.title} className="card-image" />
      <div className="card-body">
        <span className="pill">{danceClass.category}</span>
        <h3>{danceClass.title}</h3>
        <p>{danceClass.description}</p>
        <div className="card-footer-row">
          <span className="muted-text">{danceClass.level}</span>
          <Link to="/contact" className="button button-secondary">
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ClassCard;
