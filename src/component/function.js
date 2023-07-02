import React , {useEffect, useRef, useState} from "react";
var k = 1
var i =0 
var srcs = ["./image/mini_logo.png" , "./image/logo_white.png"]


export default function navbar1(){
    const m = document.querySelector("#navbar12")
    const o = document.getElementById("navbar12")
    o.style.left = "0"
   
    
    // if(document.body.scrollWidth=991){
    //     console.log("samm")
    // }
    if (document.documentElement.scrollWidth>991){
        if (k%2==0){
            var icon = document.getElementById("icon1")
            icon.style.top = "100px"
            m.style.transition = "0.4s"
            m.style.width = "320px" 
            document.getElementById("white1").src = srcs[1]
            document.getElementsByClassName("phase")[0].innerHTML = "Dashboard"
            document.getElementsByClassName("phase")[1].innerHTML = "wallet"
            document.getElementsByClassName("phase")[2].innerHTML = "Buy & Sell"
            document.getElementsByClassName("phase")[3].innerHTML = "Trader Profile"
            document.getElementsByClassName("phase")[4].innerHTML = "Crypyo Stats"
            document.getElementsByClassName("phase")[5].innerHTML = "Transaction"
            document.getElementsByClassName("phase")[6].innerHTML = "Ticker"
            document.getElementsByClassName("phase")[7].innerHTML = "Apps"
            document.getElementsByClassName("phase")[8].innerHTML = "Pages"
            document.getElementsByClassName("phase")[9].innerHTML = "General"
            document.getElementsByClassName("phase")[10].innerHTML = "Mail Box"
            document.getElementsByClassName("phase")[11].innerHTML = "Icons"
            document.getElementsByClassName("phase")[12].innerHTML = "Ul Element"
            document.getElementsByClassName("phase")[13].innerHTML = "Forms"
            document.getElementsByClassName("phase")[14].innerHTML = "Widgets"
            document.getElementsByClassName("phase")[15].innerHTML = "Table"
            document.getElementsByClassName("phase")[16].innerHTML = "Charts"
            document.getElementsByClassName("phase")[17].innerHTML = "Maps"
            
            const h = document.getElementsByClassName("link1")
            for (i=0 ; i<h.length;i++){
                h[i].style.display= "flex"
                h[i].style.justifyContent= "normal"
                
            }
            const l = document.getElementsByClassName("link1")
            for (i=0 ; i<l.length;i++){
                l[i].style.display= "block"
            }
            const y = document.getElementsByClassName("icon1")
            for(i=0 ; i<y.length ; i++){
                y[i].style.display = "block"
            }
        }
        // const o = document.getElementById("navbar12")
        if(k%2!=0){
            // o.style.width = "100%"
            // if(document.body.scrollWidth=991){
            //     o.style.left = "0"
            // }
            // var icon = document.querySelector(".icon3 i.bi")
            // icon.classList.toggle('icon1')
            m.style.transition = "0.4s"
            m.style.width = "136px"
            document.getElementById("white1").src=srcs[0]
            const jh = document.getElementsByClassName("phase")
            for (i=0 ; i<jh.length;i++){
                jh[i].innerHTML = ""
            }
            const h = document.getElementsByClassName("link1")
            for (i=0 ; i<h.length;i++){
                h[i].style.display= "flex"
                h[i].style.justifyContent='center'
            }
            const y = document.getElementsByClassName("icon1")
            for(i=0 ; i<y.length ; i++){
                y[i].style.display = "none"
            }
        }
        k++
        if (k==3){
            k=1
        }
    }
}