import './App.css';

import { RestaurantTable } from './components/RestaurantTable';
import { SearchBar } from './components/SearchBar';

export function App() {
  return (
    <div className="App">
      <SearchBar />
      <RestaurantTable />
    </div>
  );
}
