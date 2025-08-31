import { Link } from "react-router-dom";
import {FiHome, FiRefreshCcw} from 'react-icons/fi'
import {MdLanguage} from 'react-icons/md'

const BottomNav = () => {
  return (
    <div className="fixed lg:fixed lg:left-0 lg:pt-40 lg:w-12 lg:flex-col bg-neutral-900 lg:gap-5 lg:items-center lg:h-dvh lg:justify-start lg:bottom-0 lg:-z-0 bottom-0 text-white left-0 right-0 flex justify-around py-3 shadow-inner">
      <Link to="/dashboard">
        <FiHome className="text-3xl lg:mb-10" />
      </Link>
      <Link to="/dashboard">
        <FiRefreshCcw className="text-3xl lg:mb-10" />
      </Link>
      <Link to="/login">
        <MdLanguage className="text-3xl lg:mb-10" />
      </Link>
    </div>
  );
}

export default BottomNav
