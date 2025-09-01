import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 transition-all duration-300 ease-in-out 
        ${focused ? "w-full max-w-lg shadow-lg" : "w-48 max-w-xs"}`}
    >
      <span className="material-icons text-gray-500">{<FaSearch />}</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search city..."
        className="flex-1 bg-transparent outline-none px-2 text-sm text-gray-700 dark:text-gray-200"
      />
    </form>
  );
};

export default SearchBar;
