import React from "react"
import Opening from "./Opening";
import { useEffect,useState } from "react";
import "./Home.css";
import Finance from "../Images/finaancing.png";
import Phonepurchasing from "../Images/devicePurchase2.png";
import Phonerepair from "../Images/deviceRepair.png";
import Phoneselling from "../Images/deviceSelling.png";
import logo from "../Images/Logo.png";
// import Insurance from "../Images/Insurance.png";

const Home = () => {
    const[count,setcount]=useState(0)
  useEffect(()=>{
       setTimeout(()=>{
        setcount((count)=>count+1)
       },1000)
  });
  return (
    <div>
  <Opening/>
  <a  className="logo" target="_blank">
          <img  src={logo} alt="" />
        </a>
      {/* <div className='home-opening'>
          <img src={logo} alt="Logo" />
        </div> */}
      <div className="home-container">
        <div className="home-box">
          <div className="home-div1 home-innerbox">
            <a href="/financing" >
              <img
                src={Finance}
                alt=""
              />
            </a>
          </div>
          <div className="home-div2 home-innerbox" >
            <a href="/purchasing">
              <img
                src={Phonepurchasing}
                alt=""
              />
            </a>
          </div>
          <div className="home-div3 home-innerbox">
            <a href="/contract" >
              <img
                src={Phoneselling}
                alt=""
              />
            </a>
          </div>
          <div className="home-div4 home-innerbox" >
            <a href="/repair">
              <img
                src={Phonerepair}
                alt=""
              />
            </a>
          </div>
          {/* <div className="home-div5 home-innerbox" >
          <a href="/Insurance" >
              <img
                src={Insurance}
                alt=""
              />
            </a>
          </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
