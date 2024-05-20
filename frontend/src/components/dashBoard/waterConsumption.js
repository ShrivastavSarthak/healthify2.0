import React, { useState } from 'react';

const WaterCalculator = () => {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    let baseWaterIntake = weight * 0.033; // Basic water requirement in liters per kg
    let additionalWater = 0;

    switch (activityLevel) {
      case 'low':
        additionalWater = 0.3;
        break;
      case 'moderate':
        additionalWater = 0.5;
        break;
      case 'high':
        additionalWater = 0.7;
        break;
      default:
        additionalWater = 0;
    }

    const totalWaterIntake = baseWaterIntake + additionalWater;
    setWaterIntake(totalWaterIntake);
  };

  return (
    <center>
      <div className="py-5">
        <h1 className="my-5 fs-2">Water Consumption Calculator</h1>
        <form
          className="text-center border border-primary p-5 mx-5"
          onSubmit={(e) => {
            e.preventDefault();
            calculateWaterIntake();
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
            <label className="input-group-text">Activity Level:</label>
            <select
              className="form-control"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="low">Low (little or no exercise)</option>
              <option value="moderate">Moderate (exercise 3-4 times a week)</option>
              <option value="high">High (daily exercise or intense exercise 3-4 times a week)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate Water Intake
          </button>
        </form>
        {waterIntake && (
          <div className="mt-4">
            <h2>Your recommended daily water intake is: {waterIntake.toFixed(2)} liters</h2>
          </div>
        )}
      </div>
    </center>
  );
};

export default WaterCalculator;
