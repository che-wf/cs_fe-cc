import { useMemo, useState, useLayoutEffect, useEffect } from 'react';

import { fetchRestaurants } from '../api';

import { useIsFiltering } from './useFilters';
import { useSort, sortByKey } from './useSort';
import { useSearch } from './useSearch';

export function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useMemo(async () => {
    const results = await fetchRestaurants();
    setRestaurants(results);
  }, []);

  return restaurants;
}

export function useRestaurants() {
  const fetchedRestaurants = useFetchRestaurants([]);
  const [restaurants, setRestaurants] = useState([]);

  const { sort } = useSort();
  const { isFiltering } = useIsFiltering();
  const { search } = useSearch();

  useEffect(() => {
    setRestaurants(deriveRestaurants(fetchedRestaurants, sort));
  }, [fetchedRestaurants, sort]);

  return { restaurants, setRestaurants };
}

function deriveRestaurants(restaurants = [], sort) {
  sortByKey(restaurants, sort);
}
// export function useDeriveRestaurants() {
//   const { restaurants, setRestaurants } = useRestaurants();

//   // search
//   // filter, if filtering
//   // sort
//   useLayoutEffect(() => {
//     setRestaurants(sortByKey(restaurants, sort));
//   }, [restaurants, setRestaurants, sort]);
// }
