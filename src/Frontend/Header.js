import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__page">
      <Link to="/InfluencerAccess">
        <div className="influencer__Access">Influencer Access</div>
      </Link>

      <Link to="/BrandLogin">
        <div className="brand__login">Brand Login</div>
      </Link>

      <Link to="/MainPage">
          <div className="homePage">HomePage</div>
          </Link>
    </div>
  );
};

export default Header;
