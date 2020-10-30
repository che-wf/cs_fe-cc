import { useMemo, useState } from 'react';

import { fetchRestaurants } from '../api';

import { useIsFiltering } from './useFilters';
import { useSort, sortByKey } from './useSort';
import { useSearch } from './useSearch';

export function useBaseRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useMemo(async () => {
    const results = await fetchRestaurants();
    setRestaurants(results);
  }, []);

  return restaurants;
}

export function useRestaurants() {
  const restaurants = useBaseRestaurants();
  const { sort } = useSort();
  const { isFiltering } = useIsFiltering();
  const { search } = useSearch();

  // search
  // filter, if filtering
  // sort
  return sortByKey(restaurants, sort);
}
