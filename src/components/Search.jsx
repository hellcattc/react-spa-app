import { useState } from "react";

function Search({ cb }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    cb(value);
  };

  const handleKey = (e) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Search;
