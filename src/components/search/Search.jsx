import React from "react";

const Search = ({ value, onChangeData }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="border-2 rounded-md bg-white dark:bg-gray-700 border-blue-300 dark:border-gray-200 p-2 w-40"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

export default Search;
