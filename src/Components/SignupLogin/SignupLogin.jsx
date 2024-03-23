import React, { useState } from "react";
import "./SignupLogin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
 


const SignupLogin = ()=>{

    const [action, setAction] = useState("Sign Up");

    return (
        <div className="wrapper">
        <form action="">
            <h1>{action}</h1>
            <div className="inputs">
            {action==="Login"?<div></div>:<div className="input-box">
                    <input type="name" placeholder="Username" required/>
                    <FaUser className="icon"/></div>}
                

                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                    <MdEmail className="icon"/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
            </div>
            
            
            <div className="forgot-password">
                {action === "Sign Up"?<div></div>: <a href="#">Forgot Password?</a>}
               
            </div>
            <div className="submit-container">
                <button className={action === "Login"? "submit grey":"submit"} onClick ={()=>{setAction("Sign Up")}}>Sign Up</button>
                <button className={action === "Sign Up"? "submit grey":"submit"} onClick ={()=>{setAction("Login")}}>Login</button>
            </div>

        </form>

        </div>
    )
}

export default SignupLogin

