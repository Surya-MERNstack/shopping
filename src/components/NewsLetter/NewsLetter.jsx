import React from "react";
import "./NewLetters.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="your email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;