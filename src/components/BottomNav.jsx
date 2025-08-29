import { Link } from "react-router-dom";
import {FiHome, FiRefreshCcw, FiCircle} from 'react-icons/fi'

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 bg-white left-0 right-0 flex justify-around py-3 shadow-inner">
      <Link to="/dashboard">
        <FiHome />
      </Link>
      <Link to="/dashboard">
        <FiRefreshCcw />
      </Link>
      <Link to="/login">
        <FiCircle />
      </Link>
    </div>
  );
}

export default BottomNav
