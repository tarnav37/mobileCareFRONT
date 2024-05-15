import React from "react";
import "./Insurance.css";

const Insurance = () => {
  return (
    <div>
      <br />
      <div className="ins-box">
        <h2> Insurance</h2>
        <hr color="black" />
        <br />
        <h4>Mobile Care Insurance</h4>
        <br />
        <p>
          We offer financig at NO CREDIT check
          <br />
          <br />
          Our financing partners at ACIMA make it fast and easy!
          <br />
          <br />
          Get up to $4,000 in credit to spend in store!
          <br />
          <br />
          Only $80+tax up front to ACIMA!
          <br />
          <br />
          Pay off in 90 days with no interest!
        </p>

        <br />
        <p>
          {" "}
          <b>Follow the link below to apply today!</b>
        </p>
        <br />
        <a href="https://portal.acima.com/merchant_login?lang=en.leases">
          https://portal.acima.com/merchant_login?lang=en.leases
        </a>
        <br />
        <br />
        <p>
          {" "}
          <b> or Text 47811 to 22462 to apple now! </b>
        </p>
      </div>
    </div>
  );
};

export default Insurance;
