import React, { useState } from "react";
import Header from "./Header";
import "./Header.css";

const InfluencerAccess = () => {

  const [ele, setEle] = useState([]);

  const handleMinus = ()=>{

  }

  const handleAdd = () =>{
    console.log("Invoke")
    const element = React.createElement('div',{className:'InfluencerAccess__box' }, <>
    <input className="info__box__youTube" type="text" placeholder="YouTube channel link*" />
          <button className="AddNew" onClick={handleMinus}>-</button><br/>
    <input className="info__box" type="text" placeholder="Integrated Video Price*" />
    <input className="info__box" type="text" placeholder="Integrated Video Price*" />
    <input className="info__box" type="text" placeholder="Integrated Video Price*" /></>)
  // ReactDOM.render(element, rootEle)
  
  const copyele = [...ele, element];
  setEle(copyele);
  }
  console.log(ele)

  return (
    <>
      <Header />

      <div className="InfluencerAccess">
        <h1 style={{color:'white',fontWeight:'bold'}}> Influencer Access </h1>
        <div className="profile__pic">
          <img
            src="https://i.pinimg.com/originals/f1/3f/9c/f13f9c23ccfe9acd9ecca7acf95a4af2.jpg"
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
          <button className="AddNew" onClick={handleAdd}>+</button>
        </div>
        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Integrated Video Price*" />
          <input className="info__box" type="text" placeholder="Dedicated Video Price*" />
          <input className="info__box" type="text" placeholder="Pre-Roll Price" />
        </div>
        <div id="youtube">{ele.map((item, index)=><div key={index}>{ item }</div> )}</div>

        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Instagram channal link" />
        </div>

        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Stor Price" />
          <input className="info__box" type="text" placeholder="Reel Price" />
          <input className="info__box" type="text" placeholder="Post Pricing" />
        </div>
        <div className="InfluencerAccess__box">
          <input className="info__box" type="text" placeholder="Referral Code" />
        </div>

        <div className="InfluencerAccess__box">
          <input type="checkbox" style={{ width:"20px",height:"20px"}}/>
          <p style={{ color:"white", fontWeight: "bold"}}>Terms and Condition</p>
        </div>

        <button className="info__box" style={{ backgroundColor: "orange" }}>
          Submit
        </button>
      </div>
    </>
  );
};

export default InfluencerAccess;
