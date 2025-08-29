import { Link, NavLink } from "react-router-dom";
import InputField from "../components/InputField";
import { FaEnvelope, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-gray-300 shadow-2xl rounded-lg p-6">
        <h2 className="text-center text-xl font-semibold mb-4">Welcome Back</h2>

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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full py-2 rounded-full bg-blue-500 border-0 text-white font-bold">
            <NavLink to="/dashboard">Login</NavLink>
          </button>

          <div className="flex items-center justify-center text-gray-400">
            <span className="flex-1 border-b"></span>
            <span className="px-2">or</span>
            <span className="flex-1 border-b"></span>
          </div>

          <button className="w-full py-2 rounded-full bg-white border-0 flex items-center justify-center gap-2">
            {<FaGoogle />}
            Google
          </button>

          <button className="w-full py-2 rounded-full bg-white border-0 flex items-center justify-center gap-2">
            {<FaFacebook />}
            Facebook
          </button>

          <p className="text-center text-sm mt-4">
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
