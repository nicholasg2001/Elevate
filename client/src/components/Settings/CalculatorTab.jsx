import { useState } from "react";

const CalculatorTab = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [bodyFat, setBodyFat] = useState(0);
  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");

  const calculateBMI = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);
    const parsedAge = parseInt(age);

    if (parsedWeight <= 0 || parsedHeight <= 0) {
      setWeightError(parsedWeight <= 0 ? "Weight must be greater than 0" : "");
      setHeightError(parsedHeight <= 0 ? "Height must be greater than 0" : "");
      setBMI(0); // Reset BMI if validation fails
    } else if (parsedAge <= 0) {
      setAgeError("Age must be greater than 0");
      setBMI(0);
    } else {
      setWeightError("");
      setHeightError("");
      setAgeError("");
      setBMI(Math.round(703 * (parsedWeight / (parsedHeight ** 2))));
    }
  };

  const convertToBodyfat = () => {
    const parsedAge = parseInt(age);

    if (parsedAge <= 0) {
      setAgeError("Age must be greater than 0");
    } else {
      setAgeError("");
      if (gender === "Male") {
        const bodyFatPerc = 1.2 * bmi + 0.23 * parsedAge - 16.2;
        setBodyFat(Math.round(bodyFatPerc));
      } else if (gender === "Female") {
        const bodyFatPerc = 1.2 * bmi + 0.23 * parsedAge - 5.4;
        setBodyFat(Math.round(bodyFatPerc));
      }
    }
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    setBMI(0); 
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
    setBMI(0); 
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    setBodyFat(0); 
  };

  return (
    <div className="flex flex-col p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        Calculate your BMI below!
      </h3>
      <p className="mb-2">Please enter your weight:</p>
      <input
        type="number"
        value={weight}
        className="font-poppins w-1/2 p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
        onChange={handleWeightChange}
      />
      {weightError && <div className="text-red-500 mb-2">{weightError}</div>}
      <p className="mb-2">Please enter your height in inches:</p>
      <input
        type="number"
        value={height}
        className="font-poppins w-1/2 p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
        onChange={handleHeightChange}
      />
      {heightError && <div className="text-red-500 mb-2">{heightError}</div>}
      <p className="mb-2">Please enter your age:</p>
      <input
        type="number"
        value={age}
        className="font-poppins w-1/2 p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
        onChange={handleAgeChange}
      />
      {ageError && <div className="text-red-500 mb-2">{ageError}</div>}
      <p className="mb-2">How do you identify?</p>
      <select
        value={gender}
        className="mb-2 w-1/2 bg-transparent rounded-lg"
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button
        className="text-md font-poppins rounded-lg w-1/2 bg-green-600 text-white p-2 mt-4 hover:bg-green-500"
        onClick={calculateBMI}
      >
        Calculate
      </button>
      {bmi !== 0 && (
        <div className="mt-2">
          Your BMI is: {bmi} <br />
          <span className="mt-2">
            Would you like to convert this to body fat percentage?
          </span>
          <button
            className="text-md font-poppins rounded-lg w-1/2 bg-green-600 text-white p-2 mt-4 hover:bg-green-500"
            onClick={convertToBodyfat}
          >
            Convert
          </button>
          {gender === "" ? (
            <div className="mt-2 text-red-500">
              Must select a gender identity to calculate body fat
            </div>
          ) : (
            bodyFat > 0 && (
              <div className="mt-2">Your body fat percentage is: {bodyFat}%</div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CalculatorTab;
