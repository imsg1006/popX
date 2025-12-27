import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-end px-6 pb-10">
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

       
      <div className="space-y-3">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-[#6C25FF] text-white py-3 rounded-lg font-semibold  cursor-pointer hover:bg-[#E70B897B] transition"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-[#6C25FF4B] text-gray-700 py-3 rounded-lg cursor-pointer font-semibold hover:bg-[#E70B897B] transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
