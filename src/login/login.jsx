import React from "react";
import "./login.css"
import App from "../App";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ValueProvider } from "../component/function";
import Mainpage from "../component/mainpage";
export default function Login(){
    const navigate = useNavigate()
    return(
        <>
            <div className="col-12 col-lg-10">
                <ValueProvider>
                    <Mainpage/>
                </ValueProvider>
                <div className="loginpage col-12">
                    <div className=" col-sm-5 loginform d-flex flex-column ">
                        <h2>Login</h2>
                        <input type="gmail"  placeholder="Gmail"/>
                        <input type="password" placeholder="password"/>
                        <div>
                            <button onClick={()=>navigate("/")} className="loginbutton">login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}