import React,{ PureComponent,useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link  } from "react-router-dom";
import "./mainpage1.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSpring, animated, config } from "react-spring";
import { click } from "@testing-library/user-event/dist/click";

  
function Mainpage1(){
    function Number({ n }){
        const {number} = useSpring({ 
            from:{number:0},
            number : n,
            delay:200,
            config:{mass:1 , tension: 20 , friction:10},
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
    }
    const data =[
        {
            name: 'Page A',
            uv: 24,
          },
          {
            name: 'Page B',
            uv: 62,
          },
          {
            name: 'Page C',
            uv: 42,
          },
          {
            name: 'Page D',
            uv: 84,
          },
          {
            name: 'Page E',
            uv: 63,
          },
          {
            name: 'Page F',
            uv: 25,
          },
          {
            name: 'Page G',
            uv: 65,
          },
          {
            name: 'Page h',
            uv: 50,
          },
    ];
      const [Stats , setstate]=React.useState(false);
      function handledropdown1(){
      setstate(!Stats)
    }
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}`}</p>
              <p className="desc"></p>
            </div>
          );
        }
      
        return null;
      };
    return(
      <div >
        <div className="main " >
          <div className="chart1-1 ">
              <p className="p1">
                  Dashborad
              </p>
              <p className="p2">
                  Dashborad/Crypto currenct
              </p>               
          </div>
          <div className="chart1-2 ">
            <div>
                <div className="set1">
                    <p className="p3">
                    Purchase
                    </p>
                    <ResponsiveContainer className='chart1' dataKey="uv" width="100%" height="100%">
                        <BarChart data={data}>
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="uv" fill="rgba(97, 189, 161, 0.85"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                    <div>
                        <p className="p4"><Number n={6250} /></p>
                    </div>
            </div>
            <div>
                <div className="set1">
                    <p className="p3">
                    Purchase
                    </p>
                    <ResponsiveContainer className='chart1' dataKey="uv" width="100%" height="100%">
                        <BarChart data={data}>
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="uv" fill="rgba(44, 131, 182, 0.85)"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                    <div>
                        <p className="p4"><span></span><Number n={55250} /></p>
                    </div>
            </div>
            <div>
                <div className="set1">
                    <p className="p3">
                    Purchase
                    </p>
                    <ResponsiveContainer className='chart1' dataKey="uv" width="100%" height="100%">
                        <BarChart data={data}>
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="uv" fill="rgba(244, 106, 68, 0.85)"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                  <div>
                      <p className="p4"><Number n={45160} /></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
        };
export default Mainpage1;