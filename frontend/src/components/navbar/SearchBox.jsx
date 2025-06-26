import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ toggle }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/entries?search=${searchQuery.trim()}`);
      setSearchQuery("");
    } else {
      navigate("/entries");
    }
    toggle && toggle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="join">
        <input
          name="search"
          className="input join-item bg-base-100 rounded-l-full border-0"
          placeholder="Search Your Entries"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn join-item rounded-r-full bg-base-100 hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchBox;
