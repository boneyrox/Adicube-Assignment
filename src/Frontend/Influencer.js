import React from "react";
import Card from "./Card";
import "./influencer.css";
import { Link } from "react-router-dom";

const Influencer = () => {
  return (
    
      <div className="influencer">
        <Link to="/InfluencerAccess">
          <div className="influencer__Access">Influencer Access</div>
        </Link>

        <p className="text">Top Influencer working with us</p>
        <div className="card__box">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    
  );
};

export default Influencer;
