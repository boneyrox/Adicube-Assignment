import React from 'react'
import Header from './Header'
import "./Header.css";


const BrandLogin = () => {
    return (
        <>
        <Header/>
        <div className="BrandLogin">
            <h1 style={{color:'white',fontWeight:'bold'}} >Brand Login</h1>
            <div className="profile__pic">
                <img src="https://i.pinimg.com/originals/a1/2b/d0/a12bd0f468469a3b8424dab781268f4c.jpg" alt="profile__pic" />
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
