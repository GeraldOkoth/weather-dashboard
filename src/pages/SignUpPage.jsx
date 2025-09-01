import { Link, NavLink } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { OAuthButton } from "../components/Button"; //For OAuth buttons
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex justify-center lg:p-12 sm:p-6">
      <div className="w-full max-w-md bg-gray-200 shadow-xl/30 rounded-2xl p-6">
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>

        <form className="space-y-4">
          <InputField
            icon={<IoPerson />}
            type="text"
            placeholder="Enter Your Name"
          />
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
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
          {/* Directs user to dashboard if user clicks signup */}{" "}
          <NavLink to="/dashboard">
            <Button button="Sign Up" />
          </NavLink>
          <div className="flex items-center justify-center text-gray-400">
            <span className="flex-1 border-b"></span>
            <span className="px-2">or</span>
            <span className="flex-1 border-b"></span>
          </div>
          <OAuthButton icon={<FaGoogle />} Button="Google" />
          <OAuthButton icon={<FaFacebook />} Button="Facebook" />
          <p className="text-center text-sm mt-4">
            Have an account?{" "}
            <Link to="/" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
