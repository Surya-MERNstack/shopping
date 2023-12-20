// import React, { useState } from "react";
// import "./NewLetters.css";

// const NewsLetter = () => {
//   const [name, setName] = useState('');

//   const handle = () => {

//   }
//   return (
//     <div className="newsletter">
//       <h1>Get Exclusive Offers On Your Email</h1>
//       <p>Subscribe to our newletter and stay updated</p>
//       <div>
//         <input type="email" placeholder="your email" required/>
//         <button>subscribe</button>
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;


import React, { useState } from "react";
import "./NewLetters.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic to submit the email (You can use Axios or fetch here)

    // For demonstration purposes, setting submitted to true after a short delay
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubscribe}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </div>
        {submitted && <p className="success-message" style={{color:"green"}}>Subscription successful! Check your email for offers.</p>}
      </form>
    </div>
  );
};

export default NewsLetter;
