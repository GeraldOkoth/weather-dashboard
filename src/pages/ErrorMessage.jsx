import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-6">Failed to fetch weather data</p>
      <Link
        to="/"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Back
      </Link>
    </div>
  );
}

export default ErrorMessage
