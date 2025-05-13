
import "../App.css";

const exams = [
  {
    date: "02th October 2014",
    level: "Level 1 exam",
    notes: [],
  },
  {
    date: "Nov-Dec 2016",
    level: "Level 2",
    notes: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    date: "Ongoing this year",
    level: "Level 3 (Grad)",
    notes: [],
  },
];

function ExamsSection() {
  return (
    <section className="exam-section">
      <div className="exam-intro">
        <h2>Upcoming <br /> Examinations</h2>
        <p>Enquire about the examination & <br /> register for the exams</p>
      </div>

      <div className="exam-list">
        {exams.map((exam, index) => (
          <div className="exam-item" key={index}>
            <div className="calendar-icon">📅</div>
            <div>
              <strong>{exam.date}</strong>
              <p>{exam.level}</p>
              {exam.notes.map((note, i) => (
                <p key={i}>{note}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExamsSection;
