import Stepfour from "components/Stepfour";
import Stepone from "components/Stepone";
import Stepthree from "components/Stepthree";
import Steptwo from "components/Steptwo";
import Thankyou from "components/Thankyou";
import React, { useState } from "react";

const Home = () => {
  const [step, setStep] = useState(1);

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));

  return (
    <div className="bg-magnolia h-screen">
      {/* sidebar */}
      <div>
        <div>
          {[1, "2", "3", "4"].map((num, index) => (
            <div key={index} className={`text-purplishBlue ${step === index + 1 ? "text-black" : ""}`}>
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* steps */}
      <div>
        {step === 1 && <Stepone />}
        {step === 2 && <Steptwo />}
        {step === 3 && <Stepthree />}
        {step === 4 && <Stepfour />}
        {step === 5 && <Thankyou />}

        {step < 5 && (
          <div>
            {step > 1 && <button onClick={prevStep}>Go back</button>}

            {step < 4 ? (
              <button onClick={nextStep}>Next Step</button>
            ) : (
              <button onClick={nextStep}>confirm</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
