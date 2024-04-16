import { useState } from "react";

const CalculatorTab = () => {

  const [ age, setAge ] = useState(0);
  const [ gender, setGender ] = useState("");
  const [ weight, setWeight ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ bmi, setBMI ] = useState(0);
  const [ bodyFat, setBodyFat] = useState(0);

    const calculateBMI = () => {
        setBMI(Math.round(703*(weight/(height**2))));
    }

    const convertToBodyfat = () => {
      if (gender === "Male") {
        const bodyFatPerc = (1.20 * bmi) + (0.23 * age) - 16.2;
        setBodyFat(Math.round(bodyFatPerc));
      } else if (gender === "Female") {
        const bodyFatPerc = (1.20 * bmi) + (0.23 * age) - 5.4;
        setBodyFat(Math.round(bodyFatPerc));
      }
    };

    return (
      <div className="flex flex-col p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Calculate your BMI below!
        </h3>
        <p className="mb-2">
          Please enter your weight:
        </p>
        <input
          type="number"
          className="font-poppins w-1/2 p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
          onChange={(event) => setWeight(event.target.value) }
        />
        <p className="mb-2">
          Please enter your height in inches:
        </p>
        <input
          type="number"
          className="font-poppins w-1/2 p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadow-lg"
          onChange={(event) => setHeight(event.target.value) }
        />
        <p className="mb-2">
          Please enter your age:
        </p>
        <input
          type="number"
          className="font-poppins w-1/2 p-2 mb-4 border border-gray-500 rounded-lg bg-transparent shadowl-lg"
          onChange={(event) => setAge(event.target.value)}
        >
        </input>
        <p className="mb-2">
            How do you identify?
        </p>
        <select
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
          Your BMI is: {bmi}
          <br />
          <span className="mt-2">Would you like to convert this to body fat percentage?</span>
          <button
            className="text-md font-poppins rounded-lg w-1/2 bg-green-600 text-white p-2 mt-4 hover:bg-green-500"
            onClick={convertToBodyfat}
          >
            Convert
          </button>
          {gender === "" ? (
            <div className="mt-2 text-red-500">Please select a gender identity</div>
          ) : ( bodyFat > 0 && (
                <div className="mt-2">Your body fat percentage is: {bodyFat}%</div>
          ))}
        </div>
        )}
      </div>
    );
  };
  
  export default CalculatorTab;
  