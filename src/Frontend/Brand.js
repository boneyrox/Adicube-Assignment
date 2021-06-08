import React from "react";
import { Link } from "react-router-dom";
import "./brand.css";
import Card from "./Card";

const Brand = () => {
  return (
    <div className="brand">
      <Link to="/BrandLogin" style={{textDecoration:"none",fontWeight:'bold'}}>
        <div className="brand__login">Brand Login</div>
      </Link>
      <p className="text">Top Brands that trust us</p>
      <div className="card__box">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Brand;
