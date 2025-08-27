import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-center text-xl font-semibold mb-4">Welcome Back</h2>

        <form className="space-y-4">
          <InputField
            icon="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <InputField
            icon="lock"
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

          <div className="flex items-center justify-center text-gray-400">
            <span className="flex-1 border-b"></span>
            <span className="px-2">or</span>
            <span className="flex-1 border-b"></span>
          </div>

          <button className="w-full py-2 rounded-full bg-white border flex items-center justify-center gap-2">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Google
          </button>

          <button className="w-full py-2 rounded-full bg-white border flex items-center justify-center gap-2">
            <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
            Facebook
          </button>

          <p className="text-center text-sm mt-4">
            Have an account?{" "}
            <Link to="/login" className="text-blue-500">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage