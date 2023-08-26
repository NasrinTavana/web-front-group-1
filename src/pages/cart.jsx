import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./cart.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';
import { ValueProvider } from "../component/function";
import Mainpage from "../component/mainpage";

export default function Cart(){
    let [firstName, setFirstName] = useState('2');
    let [firstName1, setFirstName1] = useState('2');
    let [firstName2, setFirstName2] = useState('1');
    let [firstName3, setFirstName3] = useState('1');
    return(
        <div className="cart-main">
            <ValueProvider>
                <Mainpage/>
            </ValueProvider>
            <div className="d-flex justify-content-between align-items-center ms-3  ">
                <div className="mt-4">
                    <p className="h3">Cart</p>
                    <p className="cart-text">BitCrypto>Dashboard>Cart</p>
                </div>
                <div>
                <button className="border shadow rounded-2 cart-btn me-4">Create Report</button>
                </div>
            </div>
            <div className=" bg-white pb-5 ms-4 me-4 pt-2">
            <div className="d-flex cart-space ms-3 ps-1  me-3 justify-content-between pb-4 pt-2">
                    <div>
                    <th className="w-75 ps-2">Product</th>
                    </div>
                    <div className="ps-3  ">
                    <th className="pe-5">Price</th>
                    <th className="w-75">Quantity</th>
                    </div>
                    <div>
                    <th className="pe-4">Total</th>
                    <th>Action</th>
                    </div>
            </div>
            <div className=" d-flex justify-content-between cart-div align-items-center ms-3 me-3 pb-4">
                <div className="d-flex"> 
                    <div className="ps-2">
                        <img className="cart-img1 imm-fluid " src="./image/bagpack.png" alt="" />
                    </div>
                    <div>
                        <Link className="cart-link">Reebok Beg</Link>
                        <p className="cart-text">size-08 (Model 2019)</p>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <p className="pe-5">$99</p>
                    <span><input className="w-50" type="number" value={firstName} onChange={e => setFirstName(e.target.value)} /></span>
                </div>
                <div className="d-flex pt-3">
                    <p className="pe-5">$198</p>
                    <span><i class="bi bi-x-circle pe-2"></i></span>
                </div>
            </div>
            <div className="d-flex justify-content-between  align-items-center cart-div ms-3 me-3 pb-4">
                <div className="d-flex"> 
                    <div className="ps-2">
                        <img className="cart-img1 imm-fluid" src="./image/whiteshoe.png" alt="" />
                    </div>
                    <div>
                        <Link className="cart-link">Reebok Beg</Link>
                        <p className="cart-text">size-08 (Model 2019)</p>
                    </div>
                </div>
                <div className="d-flex">
                    <p className="pe-5">$75</p>
                    <span><input className="w-50" type="number" value={firstName1} onChange={e => setFirstName1(e.target.value)} /></span>
                </div>
                <div className="d-flex">
                    <p className="pe-5">$150</p>
                    <span><i class="bi bi-x-circle pe-2"></i></span>
                </div>
            </div>
            <div className="cart-div d-flex justify-content-between  align-items-center ms-3 me-3 pb-4">
                <div className="d-flex"> 
                    <div className="ps-2">
                        <img className="cart-img1 imm-fluid " src="./image/watch.png" alt="" />
                    </div>
                    <div>
                        <Link className="cart-link">Reebok Beg</Link>
                        <p className="cart-text">size-08 (Model 2019)</p>
                    </div>
                </div>
                <div className="d-flex ">
                    <p className="pe-5">$49</p>
                    <span><input className="w-50" type="number" value={firstName2} onChange={e => setFirstName2(e.target.value)}/></span>
                </div>
                <div className="d-flex">
                    <p className="pe-5">$49</p>
                    <span><i class="bi bi-x-circle pe-2"></i></span>
                </div>
            </div>
            <div className="d-flex  justify-content-between align-items-center ms-3  me-3 cart-div pb-4">
                <div className="d-flex"> 
                    <div className="ps-2">
                        <img className="cart-img1 imm-fluid" src="./image/redshoe.png" alt="" />
                    </div>
                    <div>
                        <Link className="cart-link">Reebok Beg</Link>
                        <p className="cart-text">size-08 (Model 2019)</p>
                    </div>
                </div>
                <div className="d-flex">
                    <p className="pe-5">$99</p>
                    <span><input className="w-50" type="number" value={firstName3} onChange={e => setFirstName3(e.target.value)}/></span>
                </div>
                <div className="d-flex">
                    <p className="pe-5">$99</p>
                    <span><i class="bi bi-x-circle pe-2"></i></span>
                </div>
                </div>
                <div className="d-flex justify-content-end">
                <div className="cart-tp m-3 p-3 col-xl-5">
                    <div>
                        <p className="h5">Total Payment</p>
                    </div>
                    <div className="cart-div ">
                        <div className="d-flex ps-4 pt-4 mt-4">
                            <p className="pe-3 cart-text2">Subtotal</p>
                            <span className="ps-5 cart-text">$496.00</span>
                        </div>
                        <div className="d-flex align-items-center ps-4 mt-4">
                            <p className="cart-text2">Shipping</p>
                            <div className="ps-5 mb-4">
                                <div className="d-flex">
                                    <input className=" ms-3 d-inline me-2" name="carclass" value="mini" type="radio" /> <span className="cart-text2">Shipping Charge : $5.00</span>
                                </div>
                                <div className="d-flex ">
                                    <input className=" ms-3 d-inline me-2" type="radio" name="carclass" value="mini" /> <span className="cart-text2">Express Shipping Charge : $10.00</span> 
                                </div>
                                <div>
                                    <Link className="cart-link ms-3 h6 ">Change Address</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex ms-4 mt-4">
                            <p className="me-4 cart-text2">Promo Code</p>
                            <span className="ms-2 cart-text">	-$10.00</span>
                        </div>
                        <div className="d-flex ms-4 mt-4">
                            <p className="me-5 cart-text2">Total</p>
                            <span className=" ps-5 h6 ">$491.00</span>
                        </div>
                    </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}