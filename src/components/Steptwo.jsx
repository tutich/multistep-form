import React from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

const Steptwo = () => {
  return (
    <div>
      <h1> Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div>
        <div>
          <div>
            <img src={arcade} alt="arcade" />
            <h2> Arcade</h2>
            <span>$9/mo</span>
          </div>
          <div>
            <img src={advanced} alt="advanced" />
            <h2>Advanced</h2>
            <span>$12/mo</span>
          </div>
          <div>
            <img src={pro} alt="pro" />
            <h2>Pro</h2>
            <span>$15/mo</span>
          </div>
        </div>
        <div>
          <div>
            <img src={arcade} alt="arcade" />
            <h2> Arcade</h2>
            <span>$90/yr</span>
            <p>2 months free</p>
          </div>
          <div>
            <img src={advanced} alt="advanced" />
            <h2>Advanced</h2>
            <span>$120/yr</span>
            <p>2 months free</p>
          </div>
          <div>
            <img src={pro} alt="pro" />
            <h2>Pro</h2>
            <span>$150/yr</span>
            <p>2 months free</p>
          </div>
        </div>
      </div>

      <div>
        <button>monthly <span></span> yearly</button>
      </div>

      
    </div>
  );
};

export default Steptwo;
