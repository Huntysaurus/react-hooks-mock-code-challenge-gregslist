import React, { useState } from "react";

function Search({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);
  }

  const [currentSearch, setCurrentSearch] = useState("")

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">🔍</button>
    </form>
  );
}

export default Search;
