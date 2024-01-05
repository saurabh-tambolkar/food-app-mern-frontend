import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer  className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" style={{ textDecoration: "none", color: "aliceblue" }}>
            <span className="mb-3 mb-md-0 text">© 2024 FoodApp, Inc</span>
          </Link>
        </div>
      </footer>
  );
}

export default Footer;
