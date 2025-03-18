import React from "react";

const Stepone = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="py-2 space-y-2">
        <h1 className="font-bold text-xl text-marineBlue">Personal info</h1>
        <p className="font-normal text-sm text-coolGray ">Please provide your name, email address, and phone number.</p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="py-1 text-marineBlue text-base font-medium">Name</label>
          <input type="text" placeholder="e.g. Stephen King" className="border border-coolGray w-full px-3 py-1 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="py-1 text-marineBlue text-base font-medium">Email Address</label>
          <input type="text" placeholder="e.g. stephenking@lorem.com" className="border border-coolGray w-full px-3 py-1 rounded-md"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="py-1 text-marineBlue text-base font-medium">Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" className="border border-coolGray w-full px-3 py-1 rounded-md" />
        </div>
      </div>

      
    </div>
  );
};

export default Stepone;
