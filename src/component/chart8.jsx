import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./chart8.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';
import Calendar from 'react-calendar';
  
export default function Chart8(){

    const [Stats , setstate]=React.useState(false);
    function handledropdown1(){
    setstate(!Stats)
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
    return(
        <div className="mt-4 row">
            <div className=" bg-white col-12 col-lg-5 ps-3 pe-2">
                <div className="d-flex justify-content-between pt-3">
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
                <div>
                    <div>
                        <ul className="ms-5 mb-0 pb-0 pt-0 ps-4 pe-0"> 
                            <li className="chart8-lis"><span>5 min ago</span> 
                                <p className="chart8-p m-0 fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                            </li>
                            <li className="chart8-lis">6 min ago
                                <p className="chart8-p m-0 fs-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                            </li>
                            <li className="chart8-lis1">7 min ago
                                <p className="chart8-p m-0 fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                            </li>
                            <li className="chart8-lis1">8 min ago
                                <p className="chart8-p m-0 fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-7 "> 
                <div className='app '>
                    <div className='clander calendar-container'>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    )
}