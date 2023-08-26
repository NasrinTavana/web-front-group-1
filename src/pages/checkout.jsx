import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./checkout.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';
import Collapse1 from "../component/collapse";
import { ValueProvider } from "../component/function";
import Mainpage from "../component/mainpage";



export default function Checkout(){


    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
return(
        <div>
            <ValueProvider>
                <Mainpage/>
            </ValueProvider>
            <div className="ch-main">
                <div className="d-flex justify-content-between align-items-center ms-3 ">
                    <div className="mt-4">
                        <p className="h3">Cart</p>
                        <p className="ch-text">BitCrypto>Dashboard>Cart</p>
                    </div>
                    <div>
                        <button className="border shadow rounded-2 cart-btn me-4">Create Report</button>
                    </div>
                </div>
                <div className="d-flex row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-12 pb-5">
                        <div className="bg-white p-3">
                            <div className="ch-b1 mb-4 pb-2"><p className="h4 ">Order Summary</p></div>
                            <div className="d-flex ch-b3 pb-2">
                                <p className="w-100 h5">Product</p>
                                <span className="pe-3 h5"> Quantity</span> 
                                <span className="h5">Total</span>
                            </div>    
                            <div className="d-flex align-items-center ch-b1 pb-2 pt-4 ">
                                <td className="ch-w   ">
                                    <img className="ch-img img-fluid" src="./image/bagpack.png" alt="" />
                                    <span className="h6">Reebok Shoes</span>
                                </td>
                                <div>
                                    <td className="pe-5">2</td>
                                    <td className="ps-3">$198</td>
                                </div>
                            </div> 
                            <div className="d-flex align-items-center ch-b1 pb-2 pt-2">
                                <td className="ch-w  ">
                                    <img className="ch-img img-fluid" src="./image/fan.png" alt="" />
                                    <span className="h6">White Morden Camera</span>
                                </td>
                                <div>
                                    <td className="pe-5">2</td>
                                    <td className="ps-3">$150</td>
                                </div>
                            </div> 
                            <div className="d-flex align-items-center ch-b1 pb-2 pt-2">
                                <td className="ch-w ">
                                    <img className="ch-img img-fluid" src="./image/purse.png" alt="" />
                                    <span className="h6">Lava Purse</span>
                                </td>
                                <div>
                                    <td className="pe-5">1</td>
                                    <td className="ps-3">$49</td>
                                </div>
                            </div> 
                            <div className="d-flex align-items-center ch-b1 pb-2 pt-2">
                                <td className="ch-w me-1">
                                    <img className="ch-img img-fluid" src="./image/redshoe.png" alt="" />
                                    <span className="h6"> Important Shoes</span>
                                </td>
                                <div>
                                    <td className="pe-5">1</td>
                                    <td className="ps-3">$99</td>
                                </div>
                            </div> 
                            <div className="d-flex justify-content-between pt-4 ">
                                    <p>Total:</p>
                                    <p className="me-2">$496</p>
                            </div>
                            <div>
                                <div className="d-flex ch-b2 p-2 pt-3 pb-3">
                                    <p className="ch-payment m-0">Subtotal</p>
                                    <p className="m-0 ">$496.00</p>
                                </div>
                                <div className="d-flex ch-b2 p-2 pt-3 pb-3">
                                    <p className="ch-payment m-0">Shipping</p>
                                    <p className="m-0">Shipping Charge : $5.00</p>
                                </div>
                                <div className="d-flex ch-b2 p-2 pt-3 pb-3">
                                    <p className="ch-payment m-0">Promo Code</p>
                                    <p className="m-0">-$10.00</p>
                                </div>
                                <div className="d-flex ch-b2 p-2 pt-3 pb-3">
                                    <p className="ch-payment m-0">Total</p>
                                    <p className="m-0">	$491.00</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4 col-lg-6 col-md-6  col-12 p-3  h-75">
                        <div className="p-3 bg-white">
                            <div className="h4 ch-b1"> <p >Delivery Address</p></div>
                            <div className="d-flex justify-content-between pt-3 ">
                                <p className=" h6 m-0 ch-p2"> First Name</p>
                                <input className=" border rounded-1" type="text" name="" id="" />
                            </div>
                            <div className="d-flex  justify-content-between pt-4">
                                <p className= "h6 m-0 ch-p2"> Last Name</p>
                                <input className=" border rounded-1" type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <p className="h6 m-0 ch-p2"> Delivery <br /> Address</p>
                                <input  className=" border rounded-1" type="text" name="" id="" />
                            </div>
                            <div className="d-flex  justify-content-between pt-4">
                                <p className="h6 m-0 ch-p2"> City</p>
                                <input className=" border rounded-1" type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pt-4 ch-ul1">
                                <p className="h6 ch-p2 m-0 me-5 ">state</p>
                                <select className="form-select">
                                        <option value="select">select</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="New york">New york</option>
                                        <option value="California">California</option>
                                    </select>
                            </div>
                            <div className="d-flex justify-content-between pt-4 ">
                                <p className="ch-p2 m-0 me-4 h6" >Country</p>
                                    <select className="form-select ch-select">
                                        <option>select</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>New Zealandv</option>
                                    </select>
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <p className="m-0 ch-p2 h6"> Zip Code</p>
                                <input className=" border rounded-1"  type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <p className="m-0 ch-p2 h6"> Email <br /> Address</p>
                                <input className=" border rounded-1" type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <p className="m-0 ch-p2 h6"> Mobile No</p>
                                <input className=" border rounded-1" type="text" name="" id="" />
                            </div>
                            <div className="ps-5 pt-3 h6">
                                <input className="  border rounded-1" type="checkbox" /><span className="ps-2">Confirm Shipping Address</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4 col-lg-6 col-md-6 mt-2 col-12 ps-3 pe-3 h-25">
                        <div className="p-3 bg-white">
                            <div className="ch-b1 mb-4 ">
                                <p className=" h4 pb-2 pt-3">Billing Details</p>
                            </div>
                            <Collapse1 />
                            <div className="d-flex justify-content-center ">
                                <button className="w-100 m-2 border rounded-pill ch-btn1 pt-2 pb-2">PLACE YOUR ORDER</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
{/* <div className="p-3 border btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
<div className="d-flex align-items-center justify-content-between">
<p className="m-0">Credit Card</p>
<img className="img-fluid ch-img2" src="./image/mastercard.png" alt="" />

<div class="collapse" id="collapseExample">
    <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
    </div>
</div>
</div> */}