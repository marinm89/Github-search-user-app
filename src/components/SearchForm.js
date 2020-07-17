import React from "react";

export default function SearchForm(props) {
  const { searchTerm, setSearchTerm, searchUsers, searchRepos } = props;

  const clickHandler = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      setSearchTerm(searchTerm);
      await searchUsers();
      await searchRepos();
    }
  };

  const textChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={searchTerm} onChange={textChangeHandler} />
        <button type="submit" onClick={clickHandler}>
          Search
        </button>
      </form>
    </div>
  );
}
