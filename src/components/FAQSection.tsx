
import { useState } from "react";
import "../App.css";

const faqs = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question:
      "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<any>(null);

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FAQ</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(idx)}>
            <span className={activeIndex === idx ? "active" : ""}>
              {faq.question}
            </span>
            <div className="icon">
              {activeIndex === idx ? (
                <span className="icon-circle">−</span>
              ) : (
                <span className="icon-circle">+</span>
              )}
            </div>
          </div>
          {activeIndex === idx && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
