import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  let location = useLocation();
  let showBackButton = location.pathname !== "/";

  let isHomePage = location.pathname === "/";
  let isViewComplaintsPage = location.pathname === "/viewcomplaints";
  let buttonText = isHomePage ? "Add Complaint" : isViewComplaintsPage ? "Add Complaint" : "View Complaints";
  let buttonLink = isHomePage ? "/addcomplaint" : isViewComplaintsPage ? "/addcomplaint" : "/viewcomplaints";


  return (
    <div className="combinenav">
      <div className="logo"><Link to="/">Form Submission</Link></div>
      <nav className="item">
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to={buttonLink}>{buttonText}</Link>
          </li>
          <li>
            {showBackButton && (
              <Link to="#" onClick={() => window.history.back()}>
                Back
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
