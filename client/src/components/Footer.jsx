import React from "react";
import { Link } from "react-router-dom";

const Footer = function () {
  return (
    <div className="Footer">
      <p>
        Created with 💛 (and{" "}
        <Link className="link" to="https://restcountries.eu">
          REST Countries
        </Link>
        ) in 🇦🇷
      </p>
    </div>
  );
};

export default Footer;
