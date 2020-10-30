import { useState, useMemo } from 'react';
import { useRestaurants } from './useRestaurants';

export function useFilters() {
  const [filters, setFilters] = useState();
}

export function useIsFiltering() {
  const [isFiltering, setIsFiltering] = useState();
  return { isFiltering, setIsFiltering };
}

export function useGenreFilter() {
  const { restaurants } = useRestaurants();

  return useMemo(() => transformList(restaurants, 'genre'), [restaurants]);
}
export function useStateFilter() {
  const { restaurants } = useRestaurants();

  return useMemo(
    () =>
      transformList(restaurants, 'state').map((element) =>
        element.toUpperCase()
      ),
    [restaurants]
  );
}
export function useAttireFilter() {
  const { restaurants } = useRestaurants();

  return useMemo(() => transformList(restaurants, 'attire'), [restaurants]);
}

function transformList(array, key) {
  return array
    .map((element) => element[key].toLowerCase().split(','))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
}
