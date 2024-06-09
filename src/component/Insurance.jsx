import React from "react";
import "./Insurance.css";
import AkkoImage from "../Images/Akko.jpg"; // Ensure this matches the file name on disk

const Insurance = () => {
  return (
    <div>
      <br />
      <div className="ins-container">
        <div className="ins-box">
          <h2>Insurance</h2>
          <hr color="black" />
          <br />
          <h4>Mobile Care Insurance</h4>
          <br />
          <p>
            Our Insurance partners at AKKO make it fast and easy!
            <br />
          </p>

          <br />
          <p>
            <b>Follow the link below to apply today!</b>
          </p>
          <br />
          <a href="https://partner.akko.app/">https://partner.akko.app/</a>
          <br />
          <div className="ins-image">
            <img src={AkkoImage} alt="AKKO Insurance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
