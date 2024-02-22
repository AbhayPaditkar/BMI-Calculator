import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const weight_kg = parseFloat(weight);
    const height_m = parseFloat(height) / 100; // Convert height from centimeters to meters

    if (
      isNaN(weight_kg) ||
      isNaN(height_m) ||
      weight_kg <= 0 ||
      height_m <= 0
    ) {
      alert("Please enter valid weight and height.");
    } else {
      const bmiValue = weight_kg / (height_m * height_m);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  return (
    <div className="App">
      <h1>Here You Can Calculate Your BMI</h1>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              step="0.1"
              placeholder="Enter weight in kilograms"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              step="0.1"
              placeholder="Enter height in centimeters"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button type="submit">Calculate BMI</button>
        </form>

        {bmi && (
          <div className="result">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
