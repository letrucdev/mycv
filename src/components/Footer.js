import React from "react";
import "./Footer.css";

function Footer({ name }) {
  return (
    <footer className="cv-footer fade-in">
    
      <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 