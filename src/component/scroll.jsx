import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./scroll.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';






export default function Scroll(){
    return(
        
        <div className="col-xl-3 ">
            <div className="scrollbar ms-2 mt-3 col-xl-3">
                <div>
                    <p className="ps-2 pt-3">Market News</p>
                </div>
                <div className="p-2">
                    <img className="img-fluid  " src="./image/newspaper.svg" />
                    <p >Aorem psum dolor sit amet, consect adipisci Quisque scelerisq.</p>
                </div>
                <div className="p-2">
                    <img className="img-fluid" src="./image/card.svg" />
                    <p>Aorem psum dolor sit amet, consect adipisci Quisque scelerisq.</p>
                </div>
                <div className="p-2">
                    <img className="img-fluid " src="./image/newspaper.svg" />
                    <p>Aorem psum dolor sit amet, consect adipisci Quisque scelerisq.</p>
                </div>
                <div className="p-2">
                    <img className="img-fluid " src="./image/card.svg" />
                    <p>Aorem psum dolor sit amet, consect adipisci Quisque scelerisq.</p>
                </div>
            </div>
        </div>
    )}