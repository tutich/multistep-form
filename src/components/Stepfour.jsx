import React from "react";

const Stepfour = () => {
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div>
        <div>
          <div>
            <h2>
              Arcade(monthly) <span>$9/mo</span>
            </h2>
            <button>Change</button>
          </div>
          <hr />
        </div>
        <div>
          <p>Online service</p>
          <span>+$1/mo</span>
        </div>
        <div>
          <p>Larger storage</p>
          <span>+$2/mo</span>
        </div>
      </div>

      <div>
        <div>
          <div>
            <h2>
              Arcade(yearly) <span>$90/yr</span>
            </h2>
            <button>Change</button>
          </div>
          <hr />
        </div>
        <div>
          <p>Online service</p>
          <span>+$10/yr</span>
        </div>
        <div>
          <p>Larger storage</p>
          <span>+$20/yr</span>
        </div>
      </div>

      <div>
        <p>Total (per year)</p>
        <span>+$120/yr</span>
      </div>

      <div>
        <button>Go Back</button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Stepfour;
