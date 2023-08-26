import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./p-detils.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';
import Mainpage from "../component/mainpage";
import { ValueProvider } from "../component/function";


export default function Productdetils(){
    return(
        <div className="d-main p-3">
            <div>
                <ValueProvider>
                    <Mainpage/>
                </ValueProvider>
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="mt-4">
                        <p className="h4 ms-4">Product</p>
                        <p className="ms-4 p-p2">BitCrypto  Dashboard Product</p>
                    </div>
                    <div>
                        <button className="border shadow rounded-2 p-btn me-4">Create Report</button>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className=" col-lg-6 bg-white ">
                    <img className="img-fluid ps-5 pe-5" src="./image/fan.png" alt="" />
                </div>
                <div className="bg-white col-lg-6 ps-5">
                    <p className="d-p1">Dastyle</p>
                    <p className="h3">Dastyle Morden Table Camera</p>
                    <p className="d-p2 ">Morden and good look model 2020</p>
                    <p>
                        <i class="bi bi-star-fill p-icon1"></i>
                        <i class="bi bi-star-fill p-icon1"></i>
                        <i class="bi bi-star-fill p-icon1"></i>
                        <i class="bi bi-star-fill p-icon1"></i>
                        <i class="bi bi-star-half p-icon1 me-2"></i>
                        <small className="d-span1">
                        4.5(9830reviews)
                        </small>
                    </p>
                    <p ><span className="h3">$89.00</span> <del className="d-del1">$180.00</del> <span className="d-span2">50% off</span></p>
                    <p className="h5 d-p2">Features :</p>
                    <li className=" d-li1">It is a long established fact that a reader will be distracted.</li>
                    <li className="d-li1">Contrary to popular belief, Lorem Ipsum is not text.</li>
                    <span className="h6 d-span3">color:</span><input className=" ms-3 d-inline" name="carclass" value="mini" type="radio" /><input className=" ms-3 d-inline" type="radio" name="carclass" value="mini" />
                    <p>
                        <input type="number" min={0} max={1000} placeholder="0"/>
                        <button className="border rounded-3 ms-1 d-btn1 ps-3 pe-3"><i class="bi bi-cart-plus"></i> Add to Cart</button>    
                    </p>
                </div>
            </div>
            <div className="m-3 p-3 bg-white">
                <p className="h5">Related Products</p>
                <p className="d-p3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
            </div>
            <div className="row ">
                <div className="col-12 col-md-3">
                    <div className="mb-2">
                        <div class="card " >
                            <div class="ribbon">
                                <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <span class="card-title d-flex justify-content-between">
                                    <div><p className="p-p1">Life Style</p><p className="p-p2 fs-6">Unique Blue Bag</p></div>
                                    <div> <span className="me-3"><span className="me-3">$49.00</span><del>$99.00</del></span>
                                    <p>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-half p-icon1"></i>
                                    </p>
                                    </div>
                                </span>
                                <div>
                                    <button className="w-100 rounded-2 p-btn1">Add to Cart</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="mb-2">
                        <div class="card " >
                            <div class="ribbon">
                                <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <span class="card-title d-flex justify-content-between">
                                    <div><p className="p-p1">Life Style</p><p className="p-p2 fs-6">Unique Blue Bag</p></div>
                                    <div> <span className="me-3"><span className="me-3">$49.00</span><del>$99.00</del></span>
                                    <p>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-half p-icon1"></i>
                                    </p>
                                    </div>
                                </span>
                                <button className="w-100  rounded-2 p-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="mb-2">
                        <div class="card " >
                            <div class="ribbon">
                                <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <span class="card-title d-flex justify-content-between">
                                    <div><p className="p-p1">Life Style</p><p className="p-p2 fs-6">Unique Blue Bag</p></div>
                                    <div> <span className="me-3"><span className="me-3">$49.00</span><del>$99.00</del></span>
                                    <p>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-half p-icon1"></i>
                                    </p>
                                    </div>
                                </span>
                                <button className="w-100  rounded-2 p-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 ">
                    <div className="mb-2">
                        <div class="card" >
                            <div class="ribbon">
                                <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <span class="card-title d-flex justify-content-between">
                                    <div><p className="p-p1">Life Style</p><p className="p-p2 fs-6">Unique Blue Bag</p></div>
                                    <div> <span className="me-3"><span className="me-3">$49.00</span><del>$99.00</del></span>
                                    <p>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-fill p-icon1"></i>
                                        <i class="bi bi-star-half p-icon1"></i>
                                    </p>
                                    </div>
                                </span>
                                <button className="w-100 rounded-2 p-btn1"> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}