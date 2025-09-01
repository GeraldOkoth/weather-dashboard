import { NavLink } from "react-router-dom";
// Reuse button component for login, signup and reset password pages
export default function Button({ button }) {
  return (
    <button className="w-full py-2 rounded-full mb-4 hover:bg-blue-700 cursor-pointer bg-blue-500 border-0 text-white font-bold">
      {button}
    </button>
  );
}

export function OAuthButton({ icon, Button }) {
  return (
    <button className="w-full py-2 rounded-full bg-white border-0 flex items-center justify-center gap-2">
      {icon}
      <NavLink to="/dashboard">{Button}</NavLink>
    </button>
  );
}
