import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./chart7.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';



export default function Chart7(){
    return(
        
        <div className="bg-white ps-3 mt-3 pe-3 col-xl-9 m-0 w-100  chart7-all">
        <div>
            <div className="d-flex justify-content-between pt-3"> 
                <p>Earing</p>
                <span >
                    <button className="border chart7-btn0">Month</button>
                    <button className="border chart7-btn0">Week</button>
                </span>
            </div>
            
            <div className="d-flex justify-content-between border p-2  ">
                <p className="m-0 chart7-list">No</p>
                <p className="m-0 chart7-list">Currency</p>
                <p className="m-0 chart7-list">Plateform</p>
                <p className="m-0 chart7-list">Email</p>
                <p className="m-0 chart7-list">ID</p>
                <p className="m-0 chart7-list">Amount</p>
                <p className="m-0 chart7-list">Status</p>
            </div>
            <div className="d-flex justify-content-between chart7-bar mt-2 p-2 ">
                <p className="m-0">1</p>
                <img className="ps-5" src="./image/bitcoin.svg" />
                <p className="ps-5 m-0 chart7-list">bitcoin.com</p>
                <p className="m-0 chart7-list">Using - Bank</p>
                <p className="m-0 chart7-list">-0.454 USD</p>
                <p className="m-0 chart7-list">$25.00</p>
                <button className="m-0 chart7-list rounded-3 border chart7-btn1">pending</button>
            </div>
            <div className="d-flex justify-content-between chart7-bar mt-2 p-2 ">
                <p className="m-0">1</p>
                <img className="ps-5" src="./image/litcoin.svg" />
                <p className="ps-5 m-0 chart7-list">bitcoin.com</p>
                <p className="m-0 chart7-list">Using - Bank</p>
                <p className="m-0 chart7-list">-0.454 USD</p>
                <p className="m-0 chart7-list">$25.00</p>
                <button className="m-0 chart7-list rounded-3 border chart7-btn1">pending</button>
            </div>
            <div className="d-flex justify-content-between chart7-bar p-2 mt-2 ">
                <p className="m-0">1</p>
                <img className="ps-5" src="./image/ripple.svg" />
                <p className="ps-5 m-0 chart7-list">bitcoin.com</p>
                <p className="m-0 chart7-list">Using - Bank</p>
                <p className="m-0 chart7-list">-0.454 USD</p>
                <p className="m-0 chart7-list">$25.00</p>
                <button className="m-0 chart7-list rounded-3 border chart7-btn1">pending</button>
            </div>
            <div className="d-flex justify-content-between chart7-bar mt-2 p-2 ">
                <p className="m-0">1</p>
                <img className="ps-5" src="./image/bluebitcoin.svg" />
                <p className="ps-5 m-0 chart7-list">bitcoin.com</p>
                <p className="m-0 chart7-list">Using - Bank</p>
                <p className="m-0 chart7-list">-0.454 USD</p>
                <p className="m-0 chart7-list">$25.00</p>
                <button className="m-0 chart7-list rounded-3 border chart7-btn2 ">success</button>
                </div>
            
            </div>
            </div>
            

    )
}