import React from 'react';
import Card from './Card';
import "./influencer.css"

const Influencer = () => {
    return (
        <div className="influencer">
            <button className="influencer__Access">Influencer Access</button>
            <p className="text">Top Influencer working with us</p>
            <div className="card__box">
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
       
    );
};

export default Influencer;