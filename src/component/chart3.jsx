import React ,{useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./chart3.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config, update } from "react-spring";


export default function Chart3(){
    const [state , setstate ] = React.useState(false)
    function handlestate(){
        setstate(!state)
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
        <div className="main1">
            <div className="line1">
                <div>
                    <p className="p1">Overview</p>
                    <p className="p2">Statistics, Predictive Analytics Data Visualization, Big Data Analytics, etc.</p>
                </div>
                <div >
                    <button ref={click} onClick={handlestate} id="btn2" className="btn2"><span>14 MARCH 2020</span><span><i class="bi bi-caret-down-fill"></i></span>
                    {state && (<div><ul className="ul1">
                            <il className="il1"><Link className="links">TODAY</Link></il>
                            <il className="il1"><Link className="links">THIS WEEK</Link></il>
                            <il className="il1"><Link className="links">LAST WEEK</Link></il>
                        </ul>
                        </div>)}
                    </button>
                    <button  className="btn2 btn2-1"><span>Export</span></button>
                </div>
            </div>
        </div>
    )
}