import React from "react";
import Mainpage1 from "../component/mainpage1";
import Mainpage from "../component/mainpage";
import Chart2 from "../component/chart2";
import "./Dashbord.css"
import Chart3 from "../component/chart3";
import Chart4 from "../component/chart4";
export default function Dashbord(){
    return(
        <div className='wholepage'>
            <div>
                <Mainpage/>
            </div>
            <div className="dashbord" >
                <Mainpage1/>
                <Chart2 />    
                <Chart3 />
                <Chart4 />
            </div>
        </div>
    )
}