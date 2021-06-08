import React from 'react';
import "./brand.css"
import Card from './Card';

const Brand = () => {
    return (
        <div className="brand">
            <button className="brand__login">Brand Login</button>
            <p className="text">Top Brands that trust us</p>
            <div className="card__box">
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    );
};

export default Brand;