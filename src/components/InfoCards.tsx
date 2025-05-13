
import "../App.css";

const cards = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];

function InfoCards() {
  return (
    <div className="info-cards-container">
      {cards.map((card, index) => (
        <div className="info-card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <a href="#" className="info-link">
            Know More <span className="arrow">➔</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
