import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (input) => {
    setInput(input);
    handleSearch(input);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />

      <input
        placeholder="Search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
