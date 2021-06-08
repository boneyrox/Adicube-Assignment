import React from 'react'
import Header from './Header'
import "./Header.css";


const BrandLogin = () => {
    return (
        <>
        <Header/>
        <div className="BrandLogin">
            <h1>Brand Login</h1>
            <div className="profile__pic">
                <img src="https://www.unigreet.com/wp-content/uploads/2020/08/love-dp-pic-1024x916.jpg" alt="profile__pic" />
            </div>
            <div className="BrandLogin__box">
                <input className="formbox" type="text" placeholder="First Name*" />
                <input className="formbox" type="text" placeholder="Last Name*" />
            </div>
            <div className="BrandLogin__box">
                <input className="form_box" type="text" placeholder="Office E-mail address*"/>
            </div>
            <div className="BrandLogin__box">
                <input className="formbox" type="text" placeholder="Mobile Number*" />
                <input className="formbox" type="text" placeholder="Alternate Number" />
            </div>
            <div className="BrandLogin__box">
                <input className="formbox" type="text" placeholder="Login ID*"/>
                <input className="formbox" type="text" placeholder="Login Password*"/>
            </div>
            <button className="formbox" style={{backgroundColor:"orange"}}>Submit</button>
            
        </div>
        </>
    )
}

export default BrandLogin
