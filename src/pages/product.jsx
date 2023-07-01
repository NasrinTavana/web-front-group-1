import React,{ Component ,PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./product.css"
import { BarChart, Bar,LineChart, Line, CartesianGrid, Cell, XAxis, YAxis, cartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";
import 'bootstrap/dist/css/bootstrap.css';

export default function Productpage(){
    return(
        <div className="p-mp">
            <div className="d-flex justify-content-between align-items-center ">
                <div className="mt-4">
                    <p className="h4 ms-4">Product</p>
                    <p className="ms-4 p-p2">BitCrypto > Dashboard >Product</p>
                </div>
                <div>
                    <button className="border shadow rounded-2 p-btn me-4">Create Report</button>
                </div>
            </div>
            <div className="d-flex ms-4 me-4">
            <div className="col-xl-3">
            <div class="card " >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
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
            <div className="col-xl-3">
            <div class="card col-xl-2 ms-2" >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img" src="./image/watch.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue Bag</p></div>
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
            <div className=" col-xl-3">
            <div class="card col-xl-2 ms-2" >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img1" src="./image/redshoe.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue Bag</p></div>
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
            <div className=" col-xl-3">
            <div class="card col-xl-2 ms-2 " >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img" src="./image/whiteshoe.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue bag </p> </div>
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
            <div className="d-flex mt-4 me-4 ms-4">
            <div className="col-xl-3">
            <div class="card" >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img" src="./image/purse.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue Bag</p></div>
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
            <div className="col-xl-3">
            <div class="card ms-2" >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue Bag</p></div>
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
            <div className="col-xl-3">
            <div class="card ms-2" >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img" src="./image/bagpack.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue Bag</p></div>
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
            <div className="col-xl-3">
            <div class="card ms-2" >
                <div class="ribbon">
                    <span class="ribbon1"><span className="text-white fs-6">Off 50%</span></span>
                </div>
                <img class="card-img-top img-fluid p-img1" src="./image/redshoe.png" alt="Card image cap"/>
                <div class="card-body">
                    <span class="card-title d-flex justify-content-between">
                        <div><p className="p-p1">Life Style</p><p className="p-p2">Unique Blue Bag</p></div>
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
                    <button className="w-100 rounded-2 p-btn1">Add to Cart</button>
                </div>
            </div>
            </div>

            </div>
        </div>
    )
}