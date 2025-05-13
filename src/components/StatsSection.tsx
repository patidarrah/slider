
import "../App.css";

const stats = [
  {
    title: "Lorem ipsum",
    number: "123+",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    title: "Lorem ipsum",
    number: "12+",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    title: "Lorem ipsum",
    number: "12+",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    title: "Lorem ipsum",
    number: "123",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-box">
            <p className="stat-title">{stat.title}</p>
            <h2 className="stat-number">{stat.number}</h2>
            <h3 className="stat-subtitle">{stat.subtitle}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
