import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Select from "react-select";
import "./Header.css";

const Language = [
  { label: "Hindi", value: "Hindi" },
  { label: "Tamil", value: "Tamil" },
  { label: "Odia", value: "Odia" },
  { label: "Marathi", value: "Marathi" },
  { label: "Telugu", value: "Telugu" },
  { label: "Malayalam", value: "Malayalam" },
  { label: "Gujrati", value: "Gujrati" },
  { label: "Bhojpuri", value: "Bhojpuri" },
  { label: "English", value: "English" },
  { label: "Haryanvi", value: "Haryanvi" },
  { label: "Bengali", value: "Bengali" },
];

const Categories = [
  { label: "Travel", value: "Travel" },
  { label: "Gaming", value: "Gaming" },
  { label: "Roasts", value: "Roasts" },
  { label: "Vines", value: "Vines" },
  { label: "Pranks", value: "Pranks" },
  { label: "Motivation", value: "Motivation" },
  { label: "News", value: "News" },
  { label: "Moto-Vlogs", value: "Moto-Vlogs" },
  { label: "Beauty", value: "Beauty" },
  { label: "Vlogs", value: "Vlogs" },
  { label: "Finance", value: "Finance" },
  { label: "Technology", value: "Technology" },
  { label: "Experiment", value: "Experiment" },
  { label: "Health and Fitness", value: "Health and Fitness" },
  { label: "Music", value: "Music" },
];

const InfluencerAccess = () => {
  const [ele, setEle] = useState([]);

  const handleAdd = () => {
    console.log("Invoke");
    const element = React.createElement(
      "div",
      { className: "InfluencerAccess__box" },
      <>
        <input
          className="info__box__youTube"
          type="text"
          placeholder="YouTube channel link*"
        />
        <button className="AddNew" onClick={handleMinus}>
          -
        </button>
        <br />
        <input
          className="info__box"
          type="text"
          placeholder="Integrated Video Price*"
        />
        <input
          className="info__box"
          type="text"
          placeholder="Integrated Video Price*"
        />
        <input
          className="info__box"
          type="text"
          placeholder="Integrated Video Price*"
        />

        <div className="container__dropdown">
          <div className="Categories">
            <div className="Categories__style">
              <Select options={Categories} />
            </div>
          </div>

          <div className="Language">
            <div className="Language__style">
              <Select options={Language} />
            </div>
          </div>
        </div>
      </>
    );
    // ReactDOM.render(element, rootEle)

    const copyele = [...ele, element];
    setEle(copyele);
  };
  // console.log(ele);
  const handleMinus = (index) => {
    const updatedItems = ele.filter((elem, id) => {
      return index !== id;
    });

    setEle(updatedItems);
  };

  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobNumber, setMobNumber] = useState();
  const [youtubChannel, setYoutubeChannel] = useState("");
  const [altMobNumber, setAltMobNumber] = useState();
  const [intVideoPrice, setIntVideoPrice] = useState("");
  const [dediVideoPrice, setDediVideoPrice] = useState("");
  const [preRolPrice, setPreRolPrice] = useState();
  const [instaChannel, setInstaChannel] = useState("");
  const [storePrice, setStorePrice] = useState();
  const [reelPrice, setReelPrice] = useState();
  const [postPrice, setPostPrice] = useState();
  const [refral, setRefral] = useState();
  const [error, setError] = useState(false);

  function onChangeInput(value) {
    // console.log(value);
  }

  function onChangeCategories(value) {
    // console.log(value);
  }

  function CheckedValue(value) {
    // console.log(value);
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/register", {
        firstname,
        lastname,
        email,
        mobNumber,
        youtubChannel,
        altMobNumber,
        intVideoPrice,
        dediVideoPrice,
        preRolPrice,
        instaChannel,
        storePrice,
        reelPrice,
        postPrice,
        refral,
      });
      console.log(res)
    } catch (err) {
      setError(true);
    }
  };

  // console.log(firstname, lastname, youtubChannel, refral);

  return (
    <>
      <Header />
      <form onSubmit={handelSubmit}>
        <div className="InfluencerAccess">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            
            Influencer Access
          </h1>
          <div className="profile__pic">
            <img
              src="https://i.pinimg.com/originals/f1/3f/9c/f13f9c23ccfe9acd9ecca7acf95a4af2.jpg"
              alt="profile__pic"
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              placeholder="First Name*"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="info__box"
              type="text"
              placeholder="Last Name*"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box boxWidth"
              type="email"
              placeholder="Office E-mail address*"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="number"
              placeholder="Mobile Number*"
              onChange={(e) => setMobNumber(e.target.value)}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Alternate Number"
              onChange={(e) => setAltMobNumber(e.target.value)}
            />
          </div>

          <div className="InfluencerAccess__box">
            <input
              className="info__box__youTube"
              onChange={(e) => setYoutubeChannel(e.target.value)}
              type="text"
              placeholder="YouTube channel link*"
            />
            <button className="AddNew" onClick={handleAdd}>
              +
            </button>
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="number"
              placeholder="Integrated Video Price*"
              onChange={(e) => setIntVideoPrice(e.target.value)}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Dedicated Video Price*"
              onChange={(e) => setDediVideoPrice(e.target.value)}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Pre-Roll Price"
              onChange={(e) => setPreRolPrice(e.target.value)}
            />
          </div>

          <div className="container__dropdown">
            <div className="Categories">
              <div className="Categories__style">
                <label className="Categories__lable" htmlFor="Categories">
                  Categories
                </label>
                <Select
                  onChange={onChangeCategories}
                  name="Categories"
                  options={Categories}
                />
              </div>
            </div>

            <div className="Language">
              <div className="Language__style">
                <label className="Categories__lable" htmlFor="Language">
                  Language
                </label>
                <Select
                  onChange={onChangeInput}
                  name="Language"
                  options={Language}
                />
              </div>
            </div>
          </div>

          <div id="youtube">
            {ele.map((elem, index) => (
              <div key={index}>{elem}</div>
            ))}
          </div>

          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              placeholder="Instagram channal link"
              onChange={(e) => setInstaChannel(e.target.value)}
            />
          </div>

          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              placeholder="Store Price"
              onChange={(e) => setStorePrice(e.target.value)}
            />
            <input
              className="info__box"
              type="text"
              placeholder="Reel Price"
              onChange={(e) => setReelPrice(e.target.value)}
            />
            <input
              className="info__box"
              type="text"
              placeholder="Post Pricing"
              onChange={(e) => setPostPrice(e.target.value)}
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              onChange={(e) => setRefral(e.target.value)}
              placeholder="Referral Code"
            />
          </div>

          <div className="InfluencerAccess__box">
            <input
              type="checkbox"
              onChange={CheckedValue}
              style={{ width: "20px", height: "20px" }}
            />
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: " sans-serif",
              }}
            >
              Terms and Condition
            </p>
          </div>

          <button
            className="info__box"
            type="submit"
            style={{ backgroundColor: "orange", width: "20em" }}
          >
            Submit
          </button>
        </div>
      </form>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </>
  );
};

export default InfluencerAccess;
