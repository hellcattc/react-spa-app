import { useRef } from "react";

function Search({ cb }) {
  const value = useRef("");

  const handleSubmit = () => {
    cb(value.current);
  };

  const handleKey = (e) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="m-10">
      <input
        className="mr-3 border border-solid px-3 py-2"
        type="search"
        placeholder="Search..."
        onKeyDown={handleKey}
        onChange={(e) => (value.current = e.target.value)}
      ></input>
      <button className="border border-solid p-2" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default Search;
