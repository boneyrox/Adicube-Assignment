import React from 'react';
import './home.css'
import InputForm from './InputForm';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <img src="https://adicube.com/wp-content/uploads/2021/03/Add_a_heading-removebg-preview-3.png" alt="" />
            </div>
            <InputForm/>
        </div>
    )
}

export default Home
