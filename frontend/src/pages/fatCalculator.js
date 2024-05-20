import React, { useState } from "react";

const FatCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    let calculatedBodyFat;

    if (gender === "male") {
      calculatedBodyFat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waist - neck) +
            0.15456 * Math.log10(height)) -
        450;
    } else if (gender === "female") {
      calculatedBodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waist + hip - neck) +
            0.221 * Math.log10(height)) -
        450;
    }

    setBodyFat(calculatedBodyFat);
  };

  return (
    <center>
      <div className="container py-5">
        <h1 className="my-5 fs-2">Body Fat Calculator</h1>
        <form
          className="text-center border border-primary p-5"
          onSubmit={(e) => {
            e.preventDefault();
            calculateBodyFat();
          }}
        >
          <div className="input-group mb-3">
            {" "}
            <label className="input-group-text">Age:</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              width={100}
            />
          </div>

          <div className="input-group mb-3">
            {" "}
            <label className="input-group-text">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="form-control"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text">Weight (kg): </label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Height (cm):</label>
            <input
              type="number"
              value={height}
              className="form-control"
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Neck Circumference (cm):</label>
            <input
             className="form-control"
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Waist Circumference (cm):</label>
            <input
              className="form-control"
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              required
            />
          </div>
          {gender === "female" && (
            <div className="input-group-mb-3">
              <labelinput-group-text className="">Hip Circumference (cm):</labelinput-group-text>
              <input
               className="form-control"
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                required
              />
            </div>
          )}
          <br />
          <button type="submit" className="btn btn-primary">
            Calculate Body Fat
          </button>
          <br />
        </form>
        {bodyFat !== null && (
          <div>
            <br />
            <h2 className="fs-2">
              Your Body Fat Percentage is: {bodyFat.toFixed(2)}%
            </h2>
          </div>
        )}
      </div>
    </center>
  );
};

export default FatCalculator;
