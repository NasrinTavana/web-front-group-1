import React from "react";
import "./login.css"
import App from "../App";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate()
    return(
        <>
            <div className="loginpage col-10">
                <div className="col-12 col-sm-5 loginform d-flex flex-column ">
                    <h2>Login</h2>
                    <input type="gmail"  placeholder="Gmail"/>
                    <input type="password" placeholder="password"/>
                    <div>
                        <button onClick={()=>navigate(-1)} className="loginbutton">login</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}