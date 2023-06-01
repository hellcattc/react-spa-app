import { memo, useCallback } from "react";

const Search = memo(function Search({ cb }) {
  const handleChange = useCallback(
    (e) => {
      cb(e.target.value);
    },
    [cb]
  );

  return (
    <div className="m-10">
      <input
        className="mr-3 border border-solid px-3 py-2"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
      {/* <button className="border border-solid p-2" onClick={handleSubmit}>
        Search
      </button> */}
    </div>
  );
});

export default Search;
