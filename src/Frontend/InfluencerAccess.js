import React from "react";
import Header from "./Header";
import "./Header.css";

const InfluencerAccess = () => {
  return (
    <>
      <Header />

      <div className="InfluencerAccess">
        <h1> Influencer Access </h1>
        <div className="profile__pic">
          <img
            src="https://www.unigreet.com/wp-content/uploads/2020/08/love-dp-pic-1024x916.jpg"
            alt="profile__pic"
          />
        </div>
        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="First Name*" />
          <input className="info__box" type="text" placeholder="Last Name*" />
        </div>
        <div className="InfluencerAccess__box">
          <input
            className="info__box boxWidth"
            type="email"
            placeholder="Office E-mail address*"
          />
        </div>
        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Mobile Number*" />
          <input className="info__box" type="text" placeholder="Alternate Number" />
        </div>

        <div className="InfluencerAccess__box">
          <input className="info__box__youTube" type="text" placeholder="YouTube channel link*" />
          <button className="AddNew">+</button>
          <input className="info__box__youTube" type="text" placeholder="OTP*" />
        </div>

        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Instagram channal link" />
          <input className="info__box" type="text" placeholder="OTP*" />
        </div>

        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Integrated Video Price" />
          <input className="info__box" type="text" placeholder="Pre-Roll Price" />
        </div>

        <button className="info__box" style={{ backgroundColor: "orange" }}>
          Submit
        </button>
      </div>
    </>
  );
};

export default InfluencerAccess;
