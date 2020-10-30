import { useState, useEffect, useLayoutEffect } from 'react';

import { getRestaurants } from '../api';

import { useIsFiltering } from './useFilters';
import { useSort, sortByKey } from './useSort';
import { useSearch } from './useSearch';

export function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useLayoutEffect(() => {
    async function fetchRestaurants() {
      const results = await getRestaurants();
      setRestaurants(results);
    }
    fetchRestaurants();
  }, []);

  return restaurants;
}

export function useRestaurants() {
  const fetchedRestaurants = useFetchRestaurants();
  const [restaurants, setRestaurants] = useState([]);
  const { sort } = useSort();

  useEffect(() => {
    setRestaurants(deriveRestaurants(fetchedRestaurants, sort));
  }, [fetchedRestaurants, sort]);

  console.info(restaurants);
  return { restaurants, setRestaurants };
}

export function useRefreshRestaurants() {
  const { restaurants, setRestaurants } = useRestaurants();

  const { sort } = useSort();
  const { isFiltering } = useIsFiltering();
  const { search } = useSearch();

  useEffect(() => {
    setRestaurants(restaurants, sort);
  });
}

function deriveRestaurants(restaurants = [], sort) {
  return sortByKey(restaurants, sort);
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
