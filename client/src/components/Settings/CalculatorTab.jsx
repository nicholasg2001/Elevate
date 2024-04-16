import { useState } from "react";
import { useAppSelector } from "../../redux/store";

const CalculatorTab = () => {

    const { user } = useAppSelector((state) => state.auth);

    const [ gender, setGender ] = useState("");
    const [ weight, setWeight ] = useState(0);
    const [ height, setHeight ] = useState(0);
    const [ bmi, setBMI ] = useState(0);
    const [ bodyfat, setBodyfat] = useState(0);

    const calculateBMI = () => {
        setBMI(Math.round(703*(weight/(height**2))));
    }

    const convertToBodyfat = () => {
        setBodyfat()
    }

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
            How do you identify?
        </p>
        <select
            className="mb-2 w-1/2 bg-transparent rounded-lg"
            onChange={(event) => setGender(event.target.value)}
        >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button 
          className="text-md font-poppins rounded-lg w-1/2 bg-green-600 text-white p-2 mt-4 hover:bg-green-500"
          onClick={calculateBMI}
        >
            Calculate
        </button>
        {bmi !==0 && (
            <div className="mt-2">
                Your BMI is: {bmi}<br/>
                <span className="mt-2">Would you like to convert this to body fat percentage?</span>
                <button 
                  className="text-md font-poppins rounded-lg w-1/2 bg-green-600 text-white p-2 mt-4 hover:bg-green-500"
                  onClick={convertToBodyfat}
                >
                    Convert
                </button>
            </div>

        )}
      </div>
    );
  };
  
  export default CalculatorTab;
  