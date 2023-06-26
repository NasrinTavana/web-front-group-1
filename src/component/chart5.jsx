import React,{ PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./chart5.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';


export default function Chart5(){
    const [Stats , setstate]=React.useState(false);
    function handledropdown1(){
    setstate(!Stats)
}
const [Stats1 , setstate1]=React.useState(false);
function handledropdown2(){
setstate1(!Stats1)
}
const [Stats2 , setstate2]=React.useState(false);
function handledropdown3(){
setstate2(!Stats2)
}
let useClickOutside=(handler)=>{
    let click = useRef();    
useEffect(()=>{
    let handler1= (event) =>{
        if(!click.current.contains(event.target)){
            handler();
            }
        };
        document.addEventListener("mousedown",handler1 );
        return () => {
        document.removeEventListener("mousedown",handler1)
        }
    });
    return click
};
let click = useClickOutside(()=>{
    setstate(false)
});
let click1 = useClickOutside(()=>{
    setstate1(false)
})
let click2 = useClickOutside(()=>{
    setstate2(false)
})
    return(
        <div className="pt-4 d-flex w-100">
            <div className="col-xl-4 ">
                <div className=" bg-white ps-2 pe-2">
                    <div className="d-flex w-100 justify-content-between">
                        <p className="h4">Exchange</p>
                        <span className="position-relative">
                                <svg ref={click} onClick={handledropdown1} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots position-relative " viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                                {Stats && (<div>
                                    <ul className="position-absolute chart4-ul shadow list-unstyled p-0">
                                    <li className="pb-2 ps-3 pe-5 pt-2 "><span><i class="bi bi-eye pe-1 "></i></span>Action</li>
                                    <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-trash pe-1"></i></span>Delete</li>
                                    <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-pencil-square pe-1"></i></span>Edit</li>
                                    <li className="pb-2 ps-3 pe-5 pt-2"><span><i class="bi bi-printer pe-1"></i></span>Print</li>
                                    <li className="pb-2 ps-3 pe-5 pt-2 d-flex" ><span><i class="bi bi-download pe-1"></i></span>Download</li>
                                    </ul>
                                </div>)}
                        </span>
                    </div>
                    <div >
                        <div >
                            <p className="chart5-p">currency</p>
                        </div>
                        <div ref={click1} onClick={handledropdown2} className="d-flex justify-content-between chart5-bl align-items-center">
                            <p className="ps-2 pt-2">Bitcoin</p><span><i class="bi bi-caret-down-fill ps-2"></i>
                            {Stats1&&(<div>
                                <ul className="list-unstyled position-absolute chart5-ul1">
                                    <li>
                                    <form className="ps-2 pt-3 pe-2 pb-1">
                                    <label>
                                        <input className=" border rounded-2 " value="Search..." type="text" />
                                    </label>
                                    </form>
                                    </li>
                                    <li className="chart5-li ps-3 pt-2 pb-2"><Link className="text-decoration-none chart5-link option selected foucs">Bitcoin</Link></li>
                                    <li className="chart5-li ps-3 pb-2"><Link className="text-decoration-none chart5-link">Litcoin</Link></li>
                                </ul>
                            </div>
                            )}
                            </span> <span className="pe-2">125.00 USD</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="chart5-p">Payment Method</p>
                        </div>
                        <div ref={click2} onClick={handledropdown3} className="d-flex justify-content-between chart5-bl align-items-center">
                            <p className="pt-2 ps-2">Litcoin</p><span><i class="bi bi-caret-down-fill ps-2 "></i>
                            {Stats2&&(<div>
                                <ul className="list-unstyled position-absolute chart5-ul1">
                                    <li>
                                    <form className="ps-2 pt-3 pe-2 pb-1">
                                    <label>
                                        <input className=" border rounded-2 " value="Search..." type="text" />
                                    </label>
                                    </form>
                                    </li>
                                    <li className="chart5-li ps-3 pt-2 pb-2"><Link className="text-decoration-none chart5-link option selected foucs">Bitcoin</Link></li>
                                    <li className="chart5-li ps-3 pb-2"><Link className="text-decoration-none chart5-link">Litcoin</Link></li>
                                </ul>
                            </div>
                            )}</span> 
                            <span className="pe-2 ">125.00 USD</span>
                        </div>
                    </div>
                        <div>
                            <p className="chart5-p align-items-center">Enter your amount</p>
                        </div>
                        <div className="d-flex justify-content-between chart5-bl align-items-center">
                            <p className="ps-2 pt-2">0.0214  BTC</p><span><i class="bi bi-caret-down-fill pe-4"></i></span> 
                            <span className="pe-2">125.00 USD</span>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between mt-2 chart5-p">
                                <p>Monthly Limit</p>
                                <span>$49750 remaining</span>
                            </div>
                            <button className="w-100 rounded-pill mt-1 p-2 border mb-3 chart5-btn">Exchange now</button>
                        </div>
                    </div>
            </div>
                <div className="ms-2 pe-2 bg-white col-xl-8 pt-2 ">
                    <div className="ps-3 h-100" >
                        <div className="d-flex justify-content-between">
                            <p>Recent Activities</p>
                            <Link className="text-secondary text-decoration-none">View all</Link>
                        </div>
                        
                            <div className=" d-flex flex-row justify-content-between align-items-center chart5-bl1 mt-3 ">
                                <i class="bi bi-arrow-down   chart5-list2"></i>
                                <p className=" chart5-list3   h-6">Sold</p>
                                <img className="" src="./image/bitcoin.svg"/><p className="mt-1 ms-2">Bitcoin</p>
                                <p className=" mt-1">Using - Bank......4585</p>
                                <p className=" mt-1"> -0.000234 BTC</p>
                                <p className=" mt-1">-0.454 USD</p>
                            </div>
                            <div className=" d-flex flex-row justify-content-between align-items-center chart5-bl1 mt-4">
                                <i class="bi bi-arrow-up  chart5-list3s"></i>
                                <p className=" chart5-list2s h-6">buy</p>
                                <img className="" src="./image/bitcoin.svg"/><p className="mt-1 ms-2">Bitcoin</p>
                                <p className=" mt-1">Using - Bank......4585</p>
                                <p className=" mt-1"> -0.000234 BTC</p>
                                <p className=" mt-1">-0.454 USD</p>
                            </div>
                            <div className=" d-flex flex-row justify-content-between align-items-center chart5-bl1 mt-4">
                                <i class="bi bi-arrow-down   chart5-list2"></i>
                                <p className=" chart5-list3   h-6">Sold</p>
                                <img className="" src="./image/bitcoin.svg"/><p className="mt-1 ms-2">Bitcoin</p>
                                <p className=" mt-1">Using - Bank......4585</p>
                                <p className=" mt-1"> -0.000234 BTC</p>
                                <p className=" mt-1">-0.454 USD</p>
                            </div>
                            <div className=" d-flex flex-row justify-content-between align-items-center chart5-bl1 mt-4">
                                <i class="bi bi-arrow-down   chart5-list2"></i>
                                <p className=" chart5-list3   h-6">Sold</p>
                                <img className="" src="./image/bitcoin.svg"/><p className="mt-1 ms-2">Bitcoin</p>
                                <p className=" mt-1">Using - Bank......4585</p>
                                <p className=" mt-1"> -0.000234 BTC</p>
                                <p className=" mt-1">-0.454 USD</p>
                            </div>
                            <div className=" d-flex flex-row justify-content-between align-items-center chart5-bl1 mt-4">
                                <i class="bi bi-arrow-down   chart5-list2"></i>
                                <p className=" chart5-list3   h-6">Sold</p>
                                <img className="" src="./image/bitcoin.svg"/><p className="mt-1 ms-2">Bitcoin</p>
                                <p className=" mt-1">Using - Bank......4585</p>
                                <p className=" mt-1"> -0.000234 BTC</p>
                                <p className=" mt-1">-0.454 USD</p>
                            </div>
                        </div>
                 
                </div>
        </div>
    )
}