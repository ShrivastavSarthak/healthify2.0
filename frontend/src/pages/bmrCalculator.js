import React, { useState } from 'react';

const BmrCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmr, setBmr] = useState(null);

  const calculateBmr = () => {
    let calculatedBmr;

    if (gender === 'male') {
      calculatedBmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
      calculatedBmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    setBmr(calculatedBmr);
  };

  return (
    <center>

    <div className='py-5'>
      <h1 className="my-5 fs-2">BMR Calculator</h1>
      <form
     className=' text-center border border-primary p-5 mx-5'
        onSubmit={(e) => {
          e.preventDefault();
          calculateBmr();
        }}
      >
        <div className='input-group mb-3'>
          <label className='input-group-text'>Age:</label>
          <input className="form-control" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div  className='input-group mb-3'>
          <label className='input-group-text'>Gender:</label>
          <select  className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className='input-group mb-3'>
          <label className='input-group-text'>Weight (kg):</label>
          <input  className="form-control" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <div className='input-group mb-3'>
          <label className='input-group-text'>Height (cm):</label>
          <input  className="form-control" type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div>
        <button type="submit" className='btn btn-primary'>Calculate BMR</button>
      </form>
      {bmr && (
        <div>
          <h2>Your BMR is: {bmr.toFixed(2)} calories/day</h2>
        </div>
      )}
    </div>
    </center>
  );
};

export default BmrCalculator;
