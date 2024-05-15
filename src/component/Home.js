import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import Opening from "./Opening";
import Finance from "../Images/Fin1.png";
import Phonepurchasing from "../Images/Dpur1.png";
import Phonerepair from "../Images/Drep1.png";
import Phoneselling from "../Images/Ddel1.png";
import logo from "../Images/Logo.png";
import Insurance from "../Images/ins.png";
import Network from "../Images/Net.png";

const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
        return () => clearTimeout(timer); // Clean up the timer
    }, [count]);

    return (
        <div>
            <Opening />
            <a className="logo" target="_blank" href="#">
                <img src={logo} alt="Logo" />
            </a>
            <div className="home-container">
                <div className="home-box">
                    <div className="home-div1 home-innerbox">
                        <a href="/financing">
                            <img src={Finance} alt="Financing" />
                        </a>
                    </div>
                    <div className="home-div2 home-innerbox">
                        <a href="/purchasing">
                            <img src={Phonepurchasing} alt="Purchasing" />
                        </a>
                    </div>
                    <div className="home-div3 home-innerbox">
                        <a href="/contract">
                            <img src={Phoneselling} alt="Selling" />
                        </a>
                    </div>
                    <div className="home-div4 home-innerbox">
                        <a href="/repair">
                            <img src={Phonerepair} alt="Repair" />
                        </a>
                    </div>
                    <div className="home-div5 home-innerbox">
                        <a href="/Insurance">
                            <img src={Insurance} alt="Insurance" />
                        </a>
                    </div>
                    <div className="home-div6 home-innerbox">
                        <a href="/Network">
                            <img src={Network} alt="Network" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
