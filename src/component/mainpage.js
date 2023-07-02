import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import './mainpage.css'
import Navbar from "./navbar.js";
import "./navbar.css"
import navbar1 from "./function";
import {useEffect, useRef, useState} from "react";


function Mainpage(){
    // let useClickOutside=(handler)=>{
    //     let click  = useRef();
    
    //     useEffect(()=>{
    //         let handler1= (event) =>{
    //             if(!click.current.contains(event.target)){
    //                 handler();
    //                 }
    //             };
    //             document.addEventListener("mousedown",handler1 );
    //             return () => {
    //             document.removeEventListener("mousedown",handler1)
    //             }
    //         });
    //         return click
    // };
    // const p = document.getElementById("#navbar")
    // let click14 = useClickOutside(()=>{
    //     p.style.left = "-330px"
    // })
    return(
            <div className="first">
                <div>
                    <img onClick={navbar1} id='img1' src="../image/line_img.png" /> 
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
