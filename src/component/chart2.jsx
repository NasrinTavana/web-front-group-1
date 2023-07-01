import React ,{useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./chart2.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config, update } from "react-spring";

export default function Chart2(){
    const [state , setstate ] = React.useState(false)
    function handlestate(){
        setstate(!state)
    }
    
    function Number({ n }){
        const {number} = useSpring({ 
            from:{number:0},
            number : n,
            delay:200,
            config:{mass:1 , tension: 20 , friction:10},
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
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
        <div>
            <div className="all-list">
                <div className="d-flex flex-column flex-lg-row">
                    <Link className="list1">Analytics</Link>
                    <Link className="list1">Cryptocurrency</Link>
                    <Link className="list1">Campaign</Link>
                    <Link ref={click} className="list2"  onClick={handlestate}>More <span><i class="bi bi-caret-down-fill bi1"></i></span>
                    {state && (<div>
                    <ul className="ul1">
                        <il className="ils1"><Link className="link123">Ecommarce Analitics</Link></il>
                        <il className="ils1"><Link className="link123">Sales</Link></il>
                        <il className="ils1"><Link className="link123">Performance</Link></il>
                    </ul>
                    </div>)}
                    </Link>
                </div>
                <div >
                    <button className="chart2-button">ToDo</button>
                    <button className="chart2-button">Setting</button>
                </div>
            </div>
            <div className="chart2-1 row">
                <div className="sqr1 col-12 col-lg-3">
                    <h4>
                        Total income
                    </h4>
                    <h3>
                        <span><Number n={14025}/></span>
                    </h3>
                    <div>
                        <p>3.78</p>
                        <i class="bi bi-caret-down-fill bi1"></i>
                        <p>This month</p>
                    </div>
                </div>
                <div className="sqr1 col-12 col-lg-3">
                    <h4>
                        sessions
                    </h4>
                    <h3>
                        <span><Number n={2025}/></span>
                    </h3>
                    <div>
                        <p>3.78</p>
                        <i class="bi bi-caret-down-fill bi1"></i>
                        <p>This month</p>
                    </div>
                </div>
                <div className="sqr1 col-12 col-lg-3">
                    <h4>
                        Ethereum Wallet
                    </h4>
                    <h3>
                        <span><Number n={8025}/></span>
                    </h3>
                    <div>
                        <p>3.78</p>
                        <i class="bi bi-caret-down-fill bi1"></i>
                        <p>This month</p>
                    </div>
                </div>
                <div className="sqr1 col-12 col-lg-3">
                    <h4>
                        Number of Clients
                    </h4>
                    <h3>
                        <span><Number n={5645}/></span>
                    </h3>
                    <div>
                        <p>3.78</p>
                        <i class="bi bi-caret-down-fill bi1"></i>
                        <p>This month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};