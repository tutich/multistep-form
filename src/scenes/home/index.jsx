import Stepfour from "components/Stepfour";
import Stepone from "components/Stepone";
import Stepthree from "components/Stepthree";
import Steptwo from "components/Steptwo";
import Thankyou from "components/Thankyou";
import React, { useState } from "react";
import bgSidebar from "../../assets/bg-sidebar-desktop.svg";
import mobileSidebar from "../../assets/bg-sidebar-mobile.svg";

const sideItems = [
  {
    id: 1,
    title: "Step 1",
    description: "Your info",
  },
  {
    id: 2,
    title: "Step 2",
    description: "Select plan",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Add-ons",
  },
  {
    id: 4,
    title: "Step 4",
    description: "Summary",
  },
];

const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({})

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleStepNext = (data) => {
    setFormData((prev) => ({...prev, ...data}));
    setStep(2);
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));

  return (
    <div className="bg-magnolia flex flex-col justify-center items-center h-screen">

      {/* Mobile sidebar */}
      <div className="absolute top-0 left-0 w-full lg:hidden">
          <img src={mobileSidebar} alt="mobile-sidebar" className="w-full" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  gap-2">
            {sideItems.map((item) => (
              <div key={item.id} className=" flex items-center top-0 left-0 justify-center gap-4">
                <div
                  className={`border w-6 h-6 flex items-center justify-center  border-coolGray rounded-full p-2 text-coolGray ${
                    step === item.id
                      ? "bg-lightBlue text-marineBlue text-bold text-sm border-transparent"
                      : ""
                  }`}
                >
                  {item.id}
                </div>
                <div>
                  <p className="text-coolGray text-sm uppercase font-medium hidden">
                    {item.title}
                  </p>
                  <h2 className="text-white text-base font-bold uppercase hidden">
                    {item.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="w-[90%] lg:w-[60%] flex flex-col lg:flex-row items-center gap-28 p-6 -mt-44 lg:-mt-0 z-10 rounded-lg shadow-lg bg-white mx-auto">

        {/* Desktop sidebar */}
        <div className="relative hidden lg:block">
          <img src={bgSidebar} alt="background-sidebar" className="w-full" />

          <div className="absolute left-6 top-12 transform  flex flex-col gap-6">
            {sideItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div
                  className={`border w-6 h-6 flex items-center justify-center  border-coolGray rounded-full p-2 text-coolGray ${
                    step === item.id
                      ? "bg-lightBlue text-marineBlue text-bold text-sm border-transparent"
                      : ""
                  }`}
                >
                  {item.id}
                </div>
                <div>
                  <p className="text-coolGray text-sm uppercase font-medium">
                    {item.title}
                  </p>
                  <h2 className="text-white text-base font-bold uppercase">
                    {item.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* steps */}
        <div className="flex flex-col justify-between py-8 h-full">
          <div className="flex-grow">
            {step === 1 && <Stepone onNext={handleStepNext}/>}
            {step === 2 && <Steptwo />}
            {step === 3 && <Stepthree />}
            {step === 4 && <Stepfour />}
            {step === 5 && <Thankyou />}
          </div>
          {step < 5 && (
            <div className={`flex mt-8 ${step > 1 ? "justify-between" : "justify-end"}`} >
              {step > 1 && <button onClick={prevStep} className="text-right text-white text-sm p-2 rounded-md h-7 w-20 flex items-center justify-center bg-marineBlue">Go back</button>}
              {/* {step < 4 ? (
                <button onClick={nextStep} className="text-right text-white text-sm p-2 rounded-md h-7 w-20 flex items-center justify-center bg-marineBlue">Next Step</button>
              ) : (
                <button onClick={nextStep} className="text-right text-white text-sm p-2 rounded-md h-7 w-20 flex items-center justify-center bg-marineBlue">confirm</button>
              )} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
