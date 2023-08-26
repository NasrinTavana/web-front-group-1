import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import './mainpage.css'
import Navbar from "./navbar.js";
import "./navbar.css"
import navbar1, { Val } from "./function";
import {useEffect, useRef, useState} from "react";


function Mainpage(){
    let {Navbar1} = Val()
    return(
            <div className="first">
                <div>
                    <img  onClick={Navbar1 } id='img1' src="../image/line_img.png" /> 
                </div>
                <div className="icon0" >
                    <button className="btn1">
                        <img className="second" src="../image/msg.svg" />
                    </button>
                    <button className="btn1">
                        <img className="second" src="../image/bell.svg" />
                    </button>
                    <button className="btn1">
                        <i className="bi bi-person "></i>
                    </button>
                    <div >
                        <p className="ps">
                            name
                        </p>
                        <p className="ps">
                            carrer
                        </p>
                    </div>
                </div>
            </div>
    )
       
}
export default Mainpage
