// import {
//   useGenreFilter,
//   useStateFilter,
//   useAttireFilter,
// } from '../../backend/hooks/useFilters';

import './SearchBar.css';

export function SearchBar() {
  //   console.info(useGenreFilter());
  //   console.info(useStateFilter());
  //   console.info(useAttireFilter());
  return (
    <div className="SearchBar">
      <input type="text" /> <button>Search</button>
    </div>
  );
}
