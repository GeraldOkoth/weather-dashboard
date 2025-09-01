import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

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
      className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 w-full max-w-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
        className="flex-1 bg-transparent outline-none px-2 text-sm text-gray-700 dark:text-gray-200"
      />
      <button
        type="submit"
        className="text-gray-500 dark:text-gray-300 hover:text-blue-500"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
