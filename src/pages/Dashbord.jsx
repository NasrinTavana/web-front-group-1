import React from "react";
import Mainpage1 from "../component/mainpage1";
import Mainpage from "../component/mainpage";
import Chart2 from "../component/chart2";
import "./Dashbord.css"
import Chart3 from "../component/chart3";
import Chart4 from "../component/chart4";
import Chart5 from "../component/chart5";
import Chart6 from "../component/chart6";
import Chart7 from "../component/chart7";
import Scroll from "../component/scroll";
import Chart8 from "../component/chart8";
import Navbar from "../component/navbar";
import { ValueProvider } from "../component/function";
// Navbar()


// function closenav(){
//     var b = document.getElementById("navbar12")
//     b.style.left = "0"
// }
export default function Dashbord(){
   
    return(
        <div className='wholepage ' >
            <div>
                <ValueProvider>
                    <Mainpage/>
                </ValueProvider>
            </div>
            <div className="dashbord" >
                <Mainpage1/>
                <Chart2 />    
                <Chart3 />
                <Chart4 />
                <Chart5 />
                <Chart6 />
                <div className="d-lg-flex"> 
                    <div className="m-0">
                        <Chart7 /><Chart8 />
                    </div> 
                    <Scroll /> 
                </div> 
            </div>
        </div>
    )
}