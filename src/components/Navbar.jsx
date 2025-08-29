import {  FaBell} from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white flex flex-col  px-4 py-3">
      <h1 className="font-extrabold text-black text-lg text-center">Weather Dashboard</h1>
      <div className="flex justify-between">
        <img src="../assets/react.svg" alt="profile" className="rounded" />
        <input
          type="text"
          placeholder="Search city..."
          className="rounded-full px-3 py-1 md:w-3xl sm:w-1.5 border outline-none text-gray-500 "
        />
        <button>
          <FaBell />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
