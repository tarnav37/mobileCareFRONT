import React from "react";
import "./Network.css";
import TMobile from "../Images/TMobile.jpg";

const Network = () => {
  return (
    <div>
      <br />
      <div className="net-box">
        <h2> Networks</h2>
        <hr color="black" />
        <br />
        <h4>Mobile Care Networks</h4>
        <br />
        <p>
          We offer Networking
          <br />
          <br />
          Our Networking partners at T- Mobile make it fast and easy!
          <br />
        </p>

        <br />
        <p>
          {" "}
          <b>Follow the link below to apply today!</b>
        </p>
        <br />
        <p>
          {" "}
          <b>T Mobile website Link</b>
        </p>
        <br />
        <a href="https://beta.rap.t-mobile.com/rap/home">
          https://beta.rap.t-mobile.com/rap/home
        </a>
        <br />
        <div className="net-image">
          <img src={TMobile} alt="TMobile Network" />
        </div>
        <br />
        <p>
          {" "}
          <b> or Text 47811 to 22462 to apple now! </b>
        </p>
      </div>
    </div>
  );
};

export default Network;
