import React from "react";

const Stepone = () => {
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div>
          <label htmlFor="name">Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>

      
    </div>
  );
};

export default Stepone;
