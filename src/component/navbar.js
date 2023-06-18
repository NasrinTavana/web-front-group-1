import { click } from "@testing-library/user-event/dist/click";
import React , {useEffect, useRef, useState} from "react";
import "./navbar.css"
import { Outlet , Link } from "react-router-dom";
import navbar1 from "./function";
import { useNavigate } from "react-router-dom";
// import Mainpage from "./mainpage";

// var k = 1
// var i =0 
// var srcs = ["./image/mini_logo.png" , "./image/logo_white.png"]
// function navbar1(){
//     const m = document.getElementById("navbar12")
//     if (k%2==0){
//         m.style.width = "240px" 
//         document.getElementById("white1").src = srcs[1]
//         document.getElementsByClassName("phase")[0].innerHTML = "dashboard"
//         document.getElementsByClassName("phase")[1].innerHTML = "wallet"
//         document.getElementsByClassName("phase")[2].innerHTML = "Buy & Sell"
//         document.getElementsByClassName("phase")[3].innerHTML = "Trader Profile"
//         document.getElementsByClassName("phase")[4].innerHTML = "Crypyo Stats"
//         document.getElementsByClassName("phase")[5].innerHTML = "Transaction"
//         document.getElementsByClassName("phase")[6].innerHTML = "Ticker"
//         document.getElementsByClassName("phase")[7].innerHTML = "Apps"
//         document.getElementsByClassName("phase")[8].innerHTML = "Pages"
//         document.getElementsByClassName("phase")[9].innerHTML = "General"
//         document.getElementsByClassName("phase")[10].innerHTML = "Mail Box"
//         document.getElementsByClassName("phase")[11].innerHTML = "Icons"
//         document.getElementsByClassName("phase")[12].innerHTML = "Ul Element"
//         document.getElementsByClassName("phase")[13].innerHTML = "Forms"
//         document.getElementsByClassName("phase")[14].innerHTML = "Widgets"
//         document.getElementsByClassName("phase")[15].innerHTML = "Table"
//         document.getElementsByClassName("phase")[16].innerHTML = "Charts"
//         document.getElementsByClassName("phase")[17].innerHTML = "Maps"
//         const h = document.getElementsByClassName("link1")
//         for (i=0 ; i<h.length;i++){
//             h[i].style.justifyContent= "normal"
            
//         }
//     }
//     if(k%2!=0){
//         m.style.width = "136px"
//         document.getElementById("white1").src=srcs[0]
//         const jh = document.getElementsByClassName("phase")

//         for (i=0 ; i<jh.length;i++){
//             jh[i].innerHTML = ""
//         }
//         // document.getElementById("::arrow").style.transform = "rotate(0deg)"
//         const h = document.getElementsByClassName("link1")
//         for (i=0 ; i<h.length;i++){
//             h[i].style.justifyContent= "center"
//         }
//     }
//     k++
//     if (k==3){
//         k=1
//     }
// }

function nba(){
    const element = document.getElementById("flash")
    element.addEventListener('click', function() {
        var icon = this.querySelector(".icon3 i.bi");
        icon.classList.toggle('rotate');
    })
} 
// function dropdown(){
//     const[Stats , setstate]=useState(false);
//     const showdropdown=()=>{
//         setstate(true)
//     const hidedropedown=()=>{
//         setstate(false)
//     }
//     }
// }
function Navbar(){
const navigate = useNavigate()
const [dropdownOpen, setDropdownOpen] = React.useState(false);
function handledropdown(){
    setDropdownOpen(!dropdownOpen)
    return nba()
}
let useClickOutside=(handler)=>{
    let click  = useRef();

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
let click = useClickOutside(()=> {
    setDropdownOpen(false)
})
let click1 = useClickOutside(()=>{
    setstate(false)
})
let click2 = useClickOutside(()=>{
    setstate1(false)
})
let click3 = useClickOutside(()=>{
    setstate2(false)
})
let click4 = useClickOutside(()=>{
    setstate3(false)
})
let click5 = useClickOutside(()=>{
    setstate4(false)
})
let click6 = useClickOutside(()=>{
    setstate5(false)
})
let click7 = useClickOutside(()=>{
    setstate6(false)
})
let click8 = useClickOutside(()=>{
    setstate7(false)
})
let click9 = useClickOutside(()=>{
    setstate8(false)
})
let click10 = useClickOutside(()=>{
    setstate9(false)
})
let click11 = useClickOutside(()=>{
    setstate10(false)
})
let click12 = useClickOutside(()=>{
    setstate11(false)
})
let click13 = useClickOutside(()=>{
    setstate12(false)
})
const [Stats , setstate]=React.useState(false);
function handledropdown1(){
    setstate(!Stats)
}
const [Stats1 , setstate1]=React.useState(false);
function handledropdown2(){
    setstate1(!Stats1)
}
const [Stats2 , setstate2]=React.useState(false);
function handledropdown3(){
    setstate2(!Stats2)
}
const [Stats3 , setstate3]=React.useState(false);
function handledropdown4(){
    setstate3(!Stats3)
}
const [Stats4 , setstate4]=React.useState(false);
function handledropdown5(){
    setstate4(!Stats4)
}
const [Stats5 , setstate5]=React.useState(false);
function handledropdown6(){
    setstate5(!Stats5)
}
const [Stats6 , setstate6]=React.useState(false);
function handledropdown7(){
    setstate6(!Stats6)
}
const [Stats7 , setstate7]=React.useState(false);
function handledropdown8(){
    setstate7(!Stats7)
}
const [Stats8 , setstate8]=React.useState(false);
function handledropdown9(){
    setstate8(!Stats8)
}
const [Stats9 , setstate9]=React.useState(false);
function handledropdown10(){
    setstate9(!Stats9)
}
const [Stats10 , setstate10]=React.useState(false);
function handledropdown11(){
    setstate10(!Stats10)
}
const [Stats11 , setstate11]=React.useState(false);
function handledropdown12(){
    setstate11(!Stats11)
}
const [Stats12 , setstate12]=React.useState(false);
function handledropdown13(){
    setstate12(!Stats12)
}


    return(
        <>
            <div id="navbar12" className="navbar">
                <div onClick={navbar1}></div>
                <ul id="allofit">
                    <div id="logo1">
                    <li className="img1">
                        <Link className="link1">
                        <img id="white1" src="./image/logo_white.png"/>
                        </Link>
                    </li>
                    </div>
                    <li ref={click} id="flash" onClick={handledropdown} className="ils">
                        <Link path="/" id="dash1" className="link1">
                            <div>
                                <img className="i12" src="./image/1.svg" alt="Image 5" />
                                <span className="phase">Dashboard</span>
                            </div>
                            <div>
                                <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                            </div>
                        </Link>
                            {dropdownOpen && (
                                <div id="myDropdown">
                                    <ul className="uls">
                                        <li className="allli">
                                        Default
                                        </li>
                                        <li className="allli">
                                        Light Sidebar
                                        </li>
                                        <li className="allli">
                                        Dark Sidebar
                                        </li>
                                    </ul>
                                </div>
                            )}
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/2.svg" alt="Image 6" />
                                <span className="phase">Wallet</span>
                            </div>
                        </Link>
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/3.svg" alt="Image 7" />
                                <span className="phase">Buy & Sell</span>
                            </div>
                        </Link>
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/4.svg" alt="Image 8" />
                                <span className="phase">Trader Profile</span>
                            </div>
                        </Link>
                    </li>
                    <li className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/5.svg" alt="Image 9" />
                                <span className="phase">Crypto Stats</span>
                            </div>

                        </Link>
                    </li>
                    <div>
                        <li ref={click1} onClick={handledropdown1} className="ils">
                            <Link className="link1">
                                <div>
                                    <img className="i12" src="./image/6.svg" alt="Image 10" />
                                    <span className="phase">Transaction</span>
                                </div>   
                                <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                            </Link>
                                {Stats && (<div>
                                    <ul className="uls">
                                        <li className="all-li">Request</li>
                                        <li className="all-li">Cancel</li>
                                        <li className="all-li">Refound</li>
                                        <li className="all-li">Payment Details</li>
                                    </ul>
                                </div>)}
                            
                        </li>
                    </div>
                    <li ref={click2} onClick={handledropdown2} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/7.svg" alt="Image 11" />
                                <span className="phase">Tickers</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats1 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Ticker  Dark</il>
                                    <il className="all-li">Ticker Light</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click3}  onClick={handledropdown3} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/8.svg" alt="Image 11" />
                                <span className="phase">Apps</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                        {Stats2 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Editor</il>
                                    <il className="all-li">Invoice</il>
                                    <il className="all-li">Builder</il>
                                    <il className="all-li">Calander</il>
                                    <il className="all-li">Board</il>
                                    <il className="all-li">Basic Card</il>
                                    <il className="all-li">Theme Card</il>
                                    <il className="all-li">Draggable Card</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click4}  onClick={handledropdown4} className="ils">
                        <Link className="link1 ">
                            <div>
                                <img className="i12" src="./image/9.svg" alt="Image 11" />
                                <span className="phase">Pages</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats3&&(<div>
                                <ul className="uls">
                                    <il className="all-li">Role & Permissions</il>
                                    <il className="all-li">FAQ</il>
                                    <il className="all-li"><button className="login-btn" onClick={()=>navigate("Login" )}>Login</button></il>
                                    <il className="all-li">Register</il>
                                    <il className="all-li">Error 404</il>
                                    <il className="all-li">Error 500</il>
                                    <il className="all-li">Forget Password</il>
                                    <il className="all-li">Gallery</il>
                                    <il className="all-li">Module Setting</il>
                                    <il className="all-li">Products</il>
                                    <il className="all-li">Product Details</il>
                                    <il className="all-li">Cart</il>
                                    <il className="all-li">Checkout</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click5} onClick={handledropdown5} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/10.svg" alt="Image 11" />
                                <span className="phase">General</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats4 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Minimized Aside</il>
                                    <il className="all-li">Empty</il>
                                    <il className="all-li">Fixed Footer</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click6} onClick={handledropdown6} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/11.svg" alt="Image 11" />
                                <span className="phase">Mail Box</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats5 && (<div>
                                <ui className="uls">
                                    <il className="all-li">Mail box</il>
                                    <il className="all-li">Compose</il>
                                    <il className="all-li">Important Mail</il>
                                    <il className="all-li">Mail Trash</il>
                                    <il className="all-li">Chat</il>
                                </ui>
                            </div>)}
                        
                    </li>
                    <li ref={click7} onClick={handledropdown7} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/12.svg" alt="Image 11" />
                                <span className="phase">Icons</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats6 && (<div>
                                <ul className="uls">
                                    <il className="all-li">Fontawesome Icon</il>
                                    <il className="all-li">Themefy Icon</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click8} onClick={handledropdown8} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/18.svg" alt="Image 11" />
                                <span className="phase">Ul Element</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats7 && (<div>
                                <ul className="uls">
                                <il className="all-li">Colors</il>
                                <il className="all-li">Alerts</il>
                                <il className="all-li">Buttons</il>
                                <il className="all-li">Modal</il>
                                <il className="all-li">Dropdowns</il>
                                <il className="all-li"> Badges</il>
                                <il className="all-li">Loading Indicators</il>
                                <il className="all-li">Color Plate</il>
                                <il className="all-li">Typography</il>
                                <il className="all-li">Date Picer</il>
                                <il className="all-li">Animate</il>
                                <il className="all-li">Scroll Reveal</il>
                                <il className="all-li">Tolt Animation</il>
                                <il className="all-li">Navs</il>
                                </ul>
                            </div>)}
                       
                    </li>
                    <li ref={click9} onClick={handledropdown9} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/forms.svg" alt="Image 11" />
                                <span className="phase">forms</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats8 && (<div>
                                <ul className="uls">
                                <il className="all-li">Basic Elements</il>
                                <il className="all-li">Groups</il>
                                <il className="all-li">Max Lenght</il>
                                <il className="all-li">Layouts</il>
                                </ul>
                            </div>)}
                       
                    </li>
                    <li ref={click10} onClick={handledropdown10} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/14.svg" alt="Image 11" />
                                <span className="phase">Widgets</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats9 && (<div>
                                <ul className="uls">
                                <il className="all-li">Accordions</il>
                                <il className="all-li">Scrollable</il>
                                <il className="all-li">Notofocayions</il>
                                <il className="all-li">Notofocayions</il>
                                <il className="all-li">Carouse</il>
                                <il className="all-li">Pagination</il>
                                <il className="all-li">Profile</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click11} onClick={handledropdown11} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/17.svg" alt="Image 11" />
                                <span className="phase">Table</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats10 && (<div>
                                <ul className="uls">
                                <il className="all-li">Data Table</il>
                                <il className="all-li">Bootstarp</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click12} onClick={handledropdown12} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/16.svg" alt="Image 11" />
                                <span className="phase">Charts</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats11 && (<div>
                                <ul className="uls">
                                <il className="all-li">ChartJS</il>
                                <il className="all-li">Apex Charts</il>
                                <il className="all-li">Charts Sparkline</il>
                                <il className="all-li">Am-Charts</il>
                                <il className="all-li">Nvd3Charts</il>
                                </ul>
                            </div>)}
                        
                    </li>
                    <li ref={click13} onClick={handledropdown13} className="ils">
                        <Link className="link1">
                            <div>
                                <img className="i12" src="./image/map.svg" alt="Image 11" />
                                <span className="phase">Maps</span>
                            </div>
                            <span className="icon3"><i className="bi animate-icon bi-chevron-right icon1"></i></span>
                        </Link>
                            {Stats12 && (<div>
                                <ul className="uls">
                                <il className="all-li">Maps JS</il>
                                <il className="all-li">Vector Maps</il>
                                </ul>
                            </div>)}
                    </li>
                </ul>
            </div>
            <Outlet/>

        </>  
  );
  
};


        // <div id="navbar">
        //     <Link onClick={navbar1}>next</Link>
        //     <ul className="ul1">
        //         <li className="menu1">
        //         <Link className="dropbtn" to='/'>
        //             <img className="img1" src="./image/mini_logo.png"/>
        //         </Link> 
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/1.svg"/>
        //             </Link>
        //             <div class="dropdown-content">
        //                 <a href="#">Link 1</a>
        //                 <a href="#">Link 2</a>
        //                 <a href="#">Link 3</a>
        //             </div>
        //             <p className="p1"></p>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/2.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/3.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/4.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/5.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/6.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/7.svg"/>
        //             </Link>
        //         </li>
        //         <li className="menu1">
        //             <Link>
        //                 <img src="./image/8.svg"/>
        //             </Link>
        //         </li>
        //     </ul>

        // </div>
export default Navbar;