import React from 'react';
import "./inputform.css";

const InputForm = () => {
    return (
        <div className="input__form">
            <div className="input__box">
                <button className="form__box" type="text"  >Pricing (popup)</button>
                <button className="form__box" type="text" >Case Studies(popup)</button>
            </div>
            <div className="input__box">
                <input className="formbox" type="text" placeholder="First Name" />
                <input className="formbox" type="text" placeholder="Last Name" />
            </div>
            <div className="input__box">
                <input className="form_box" type="text" placeholder="Office E-mail address"/>
            </div>
            <div className="input__box">
                <input className="formbox" type="text" placeholder="Mobile Number" />
                <input className="formbox" type="text" placeholder="Company Name" />
            </div>
            <div className="input__box">
                <input className="formbox" type="text" placeholder="Campaign Budget" />
                <input className="formbox" type="text" placeholder="Launch Timing"/>
            </div>
            <div className="input__box">
                <input className="formbox" type="text" placeholder="Login ID"/>
                <input className="formbox" type="text" placeholder="Login Password"/>
            </div>
            <button className="formbox" style={{backgroundColor:"orange"}}>Submit</button>
            
        </div>
    )
}

export default InputForm
