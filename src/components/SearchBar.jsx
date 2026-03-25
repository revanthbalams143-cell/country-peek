function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        aria-label="Search for a country"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
