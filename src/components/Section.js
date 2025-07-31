import React from "react";
import "./Section.css";

function Section({ title, children }) {
  return (
    <section className="cv-section slide-up">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section; 