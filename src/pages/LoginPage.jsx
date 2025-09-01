import { Link, NavLink } from "react-router-dom";
import { OAuthButton } from "../components/Button"; //For OAuth buttons
import InputField from "../components/InputField";
import Button from "../components/Button";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center lg:p-12 sm:p-6">
      <div className="w-full max-w-md bg-gray-200 shadow-xl/30 rounded-2xl p-6">
        <h2 className="text-center text-2xl font-bold mb-6">Welcome Back!</h2>

        <form className="space-y-4 p-4">
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
            {/* Directs user to reset password page upon click */}
            <Link to="/forgot" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>

          {/* Directs user to dashboard if user clicks login */}
          <NavLink to="/dashboard">
            <Button button="Login" />
          </NavLink>
          <div className="flex items-center justify-center text-gray-400">
            <span className="flex-1 border-b"></span>
            <span className="px-2">or</span>
            <span className="flex-1 border-b"></span>
          </div>

          <OAuthButton icon={<FaGoogle />} Button="Google" />
          <OAuthButton icon={<FaFacebook />} Button="Facebook" />

          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
