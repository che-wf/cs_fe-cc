import { useMemo } from 'react';
import { useRestaurants } from '../../backend/hooks';

import { Table } from '../common/Table';

export function RestaurantTable() {
  const restaurants = useRestaurants() ?? [];
  const columns = useMakeColumns(restaurants);

  return <Table columns={columns} data={restaurants} />;
}

function useMakeColumns() {
  return useMemo(
    () => [makeNameColumn(), makeCityColumn()].filter(Boolean),
    []
  );
}

function makeNameColumn() {
  return {
    title: 'Name',
    slug: 'name',
  };
}
function makeCityColumn() {
  return {
    title: 'City',
    slug: 'city',
  };
}
