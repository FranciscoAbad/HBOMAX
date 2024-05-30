import React, { useState } from "react";
import "./LandingFaqs.css";
import data from "../../../../data/LandingFaqs.json";

export const LandingFaqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="landing-faqs">
      <div className="landing-faqs-container container">
        <div className="landing-faqs-header">
          <h2 className="landing-title">
            ¿Tienes preguntas? Tenemos las respuestas
          </h2>
        </div>
        <div className="landing-faqs-content">
          <ul className="landing-faqs-content-list">
            {data.map((object, index) => (
              <li key={index} className="landing-faqs-content-list-item">
                <button
                  onClick={() => toggleIndex(index)}
                  className="landing-faqs-content-list-item-button"
                >
                  {object.question}
                  <span className="landing-faqs-content-list-item-button-icon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="landing-faqs-content-list-item-answer">
                    <p className="landing-faqs-content-list-item-answer-text">
                      {object.answer}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
