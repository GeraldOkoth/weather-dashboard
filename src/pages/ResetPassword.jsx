import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex justify-center lg:p-12 sm:p-6">
      <div className="flex flex-col h-fit w-full max-w-md bg-gray-200 p-6  rounded-2xl shadow-xl/30">
        <h2 className="text-center text-2xl font-bold mb-6">Reset Password</h2>
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

          <NavLink to="/">
            <Button button="Reset Password" />
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
