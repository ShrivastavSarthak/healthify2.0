import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi);
    setMessage(getBmiMessage(calculatedBmi));
  };

  const getBmiMessage = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obesity';
  };

  return (
    <center>
      <div className="py-5">
        <h1 className="my-5 fs-2">BMI Calculator</h1>
        <form
          className="text-center border border-primary p-5 mx-5"
          onSubmit={(e) => {
            e.preventDefault();
            calculateBmi();
          }}
        >
          <div className="input-group mb-3">
            <label className="input-group-text">Weight (kg):</label>
            <input
              className="form-control"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Height (cm):</label>
            <input
              className="form-control"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div className="mt-4">
            <h2>Your BMI is: {bmi.toFixed(2)}</h2>
            <h3>{message}</h3>
          </div>
        )}
      </div>
    </center>
  );
};

export default BmiCalculator;
