import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { scheduleData } from "../data/siteData";

function SchedulePage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Timetable"
            title="Weekly class schedule"
            description="Plan your training around weekday and weekend studio batches."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="table-wrap">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Time</th>
                  <th>Days</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item) => (
                  <tr key={`${item.className}-${item.time}`}>
                    <td>{item.className}</td>
                    <td>{item.time}</td>
                    <td>{item.days}</td>
                    <td>{item.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note-card">
            <p>Weekend special batches available for kids, beginners, and performance rehearsals.</p>
            <Link to="/contact" className="button">
              Register for Class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SchedulePage;
