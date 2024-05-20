import React, { useState } from 'react';

const FitnessCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [tdee, setTdee] = useState(null);

  const calculateTdee = () => {
    let bmr;

    // Calculate BMR based on gender
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'very-active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1;
    }

    const calculatedTdee = bmr * activityMultiplier;
    setTdee(calculatedTdee);
  };

  return (
    <center>
      <div className="py-5">
        <h1 className="my-5 fs-2">Fitness Calculator</h1>
        <form
          className="text-center border border-primary p-5 mx-5"
          onSubmit={(e) => {
            e.preventDefault();
            calculateTdee();
          }}
        >
          <div className="input-group mb-3">
            <label className="input-group-text">Age:</label>
            <input
              className="form-control"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Gender:</label>
            <select
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
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
          <div className="input-group mb-3">
            <label className="input-group-text">Activity Level:</label>
            <select
              className="form-control"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="active">Very active (hard exercise/sports 6-7 days a week)</option>
              <option value="very-active">Super active (very hard exercise/sports & physical job)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate TDEE
          </button>
        </form>
        {tdee && (
          <div className="mt-4">
            <h2>Your Total Daily Energy Expenditure (TDEE) is: {tdee.toFixed(2)} calories/day</h2>
          </div>
        )}
      </div>
    </center>
  );
};

export default FitnessCalculator;
