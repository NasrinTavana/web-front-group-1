import React,{ PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./chart6.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';


export default function Chart6(){
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="chart6-label">{`${label} : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };
      
    const [Stats , setstate]=React.useState(false);
    function handledropdown1(){
    setstate(!Stats)
}
const [Stats1 , setstate1]=React.useState(false);
function handledropdown2(){
setstate1(!Stats1)
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
    });
    const data = [
        {
          xl:0,
          name: 'Jan',
          uv: 76,
          pv: 44,
          amt: 76,
          fb:76,
        },
        {
          name: 'Feb',
          uv: 85,
          pv: 55,
          amt: 85,
          fb:85,
        },
        {
          name: 'Mar',
          uv: 101,
          pv: 57,
          amt: 101,
          fb:101,
        },
        {
          name: 'Apr',
          uv: 98,
          pv: 56,
          amt: 98,
          fb:98,
        },
        {
          name: 'May',
          uv: 87,
          pv: 61,
          amt: 87,
          fb:87,
        },
        {
          name: 'Jun',
          uv: 105,
          pv: 58,
          amt: 105,
          fb:105,
        },
        {
          name: 'Jul',
          uv: 76,
          pv: 44,
          amt: 76,
          fb:76,
        },
        {
            name: 'Aug',
            uv: 85,
            pv: 55,
            amt: 85,
            fb:85,
          },
          {
            name: 'Sep',
            uv: 101,
            pv: 57,
            amt: 101,
            fb:101,
          },
          {
            name: 'Oct',
            uv: 98,
            pv: 56,
            amt: 98,
            fb:98,
          },
          {
            name: 'Nov',
            uv: 87,
            pv: 61,
            amt: 87,
            fb:87,
          },
          {
            xl:450,
            name: 'Dec',
            uv: 105,
            pv: 58,
            amt: 105,
            fb:105,
          },
      ];
    return( 
        <div className=" mt-2" >
          <div className="row">
            <div className="bg-white col-12 col-xl-4 chart6-bg ">
              <div className=" d-flex justify-content-between pt-2 ps-2 ">
                <p>Quick Transfer</p>
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
              <div className="d-flex justify-content-between ps-2 pe-2 ">
                  <p>Recent Cantact</p>
                  <span><Link className="text-decoration-none chart6-link">View More</Link></span>
              </div>
              <div className="justify-content-between chart6-list1">
                <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid p-2" src="./image/1.png" />
                  <p className="m-0">Samuel</p>
                  <p className="chart6-p">@samuel15</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid p-2" src="./image/2.png" />
                  <p className="m-0">Samuel</p>
                  <p className="chart6-p">@samuel15</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid p-2" src="./image/3.png" />
                  <p className="m-0">Samuel</p>
                  <p className="chart6-p">@samuel15</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid p-2 " src="./image/4.png" />
                  <p className="m-0">Samuel</p>
                  <p className="chart6-p">@samuel15</p>
                </div>
              </div>
              <div className="d-flex flex-column chart6-list1 align-items-center" >
                <p className="chart6-p pt-3 m-0">Amount ETH</p>
                <p className="h2 mb-3">8,124.52</p>
              </div>
              <div className="ms-2 me-2">
                <button className="w-100 rounded-pill mt-1 p-2 border chart6-btn mt-3 mb-3">Send Money</button>
              </div>
            </div>
            <div className="bg-white col-12 col-xl-8  ps-2">
              <div className=" bg-white d-flex justify-content-between me-4">
                <p className="ps-3">Revenue Statistics</p>
                <span className="position-relative">
                  <svg ref={click1} onClick={handledropdown2} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots position-relative " viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                  </svg>
                  {Stats1 && (<div>
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
              <ResponsiveContainer width="96%" height="90%">
                  <BarChart width={150} height={40} data={data}>
                  <CartesianGrid strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis dataKey="xl" />
                  <Tooltip content={CustomTooltip} />
                  <Bar dataKey="pv" stackId="a" barSize={15} fill="rgba(88, 134, 255, 0.85)" />
                  <Bar dataKey="amt" stackId="a" fill="rgba(6, 255, 255, 0.85)" />
                  <Bar dataKey="uv" stackId="a" fill="rgba(0, 23, 255, 0.85)" />
                  <Bar dataKey="fb" stackId="a" fill="rgba(56, 51, 88, 0.85)" />
                  </BarChart>
              </ResponsiveContainer>
            </div> 
          </div>           
        </div>

    )
}