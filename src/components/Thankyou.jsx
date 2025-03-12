import React from 'react';
import thankYou from "../assets/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div>
        <img src={thankYou} alt="thank-you" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thankyou