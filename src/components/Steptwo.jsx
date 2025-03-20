import React, { useState } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

const Steptwo = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleSwitch = () => setIsYearly(!isYearly);

  return (
    <div className="space-y-10">
      <div className="space-y-1 py-2">
        <h1 className="text-2xl text-marineBlue font-bold"> Select your plan</h1>
        <p className="text-coolGray">You have the option of monthly or yearly billing.</p>
      </div>

      <div>
        {isYearly ? (
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col items-start border border-coolGray p-3 w-1/3 h-36 rounded-md">
              <img src={arcade} alt="arcade" className="mb-6" />
              <h2 className="text-base font-bold text-marineBlue mb-1"> Arcade</h2>
              <span className="text-sm text-coolGray font-medium">$90/yr</span>
              <p className="font-medium text-base text-marineBlue">2 months free</p>
            </div>
            <div className="flex flex-col items-start border border-coolGray p-3 w-1/3 h-36 rounded-md">
              <img src={advanced} alt="advanced" className="mb-6"/>
              <h2 className="text-base font-bold text-marineBlue mb-1">Advanced</h2>
              <span className="text-sm text-coolGray font-medium">$120/yr</span>
              <p className="font-medium text-base text-marineBlue">2 months free</p>
            </div>
            <div className="flex flex-col items-start border border-coolGray p-3 w-1/3 h-36 rounded-md">
              <img src={pro} alt="pro" className="mb-6" />
              <h2 className="text-base font-bold text-marineBlue mb-1">Pro</h2>
              <span className="text-sm text-coolGray font-medium">$150/yr</span>
              <p className="font-medium text-base text-marineBlue">2 months free</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col items-start border border-coolGray p-3 w-1/3 h-36 rounded-md">
              <img src={arcade} alt="arcade" className="mb-8" />
              <h2 className="text-base font-bold text-marineBlue mb-1"> Arcade</h2>
              <span className="text-sm text-coolGray font-medium">$9/mo</span>
            </div>
            <div className="flex flex-col items-start border border-coolGray p-3 w-1/3 h-36 rounded-md">
              <img src={advanced} alt="advanced"  className="mb-8" />
              <h2 className="text-base font-bold text-marineBlue mb-1">Advanced</h2>
              <span className="text-sm text-coolGray font-medium">$12/mo</span>
            </div>
            <div className="flex flex-col items-start border border-coolGray p-3 w-1/3 h-36 rounded-md">
              <img src={pro} alt="pro"  className="mb-8" />
              <h2 className="text-base font-bold text-marineBlue mb-1">Pro</h2>
              <span className="text-sm text-coolGray font-medium">$15/mo</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-6 bg-alabaster p-2">
        <span
          className={`text-base text-coolGray font-bold ${
            !isYearly ? "text-marineBlue" : ""
          }`}
        >
          Monthly
        </span>
        <div
          className="relative w-10 h-5 bg-marineBlue rounded-full cursor-pointer"
          onClick={toggleSwitch}
        >
          <div
            className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all duration-75 ${
              isYearly ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </div>
        <span
          className={`text-base text-coolGray font-bold ${
            isYearly ? "text-marineBlue" : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Steptwo;
