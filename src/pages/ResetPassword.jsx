import React from "react";
import InputField from "../components/InputField";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaLock, FaCheck } from "react-icons/fa";


const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center mx-auto w-3/4 lg:w-1/2 mt-4 bg-gray-300 p-6  rounded-2xl shadow-2xl">
      <h2 className="text-center text-xl font-semibold mb-4">Reset Password</h2>
      <form className="space-y-4">
        <InputField
          icon={<FaEnvelope />}
          type="email"
          placeholder="Enter Your Email"
        />
        <InputField
          icon={<FaLock />}
          type="password"
          placeholder="Enter Your Password"
        />
        <InputField
          icon={<FaLock />} 
          type="password"
          placeholder="Repeat Your Password"
        />

        <button className="w-full py-2 rounded-full bg-blue-500 border-0 text-white font-bold">
          <NavLink to="/">Reset Password</NavLink>
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
