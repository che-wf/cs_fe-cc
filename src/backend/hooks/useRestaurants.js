import { useMemo, useState } from 'react';

import { fetchRestaurants } from '../api';

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState({});

  useMemo(async () => {
    const results = await fetchRestaurants();
    setRestaurants(results);
  }, []);

  return restaurants;
}
