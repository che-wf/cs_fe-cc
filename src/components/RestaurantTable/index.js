import { useMemo } from 'react';
import { useRestaurants } from '../../backend/hooks';

import { Table } from '../common/Table';

import './RestaurantTable.css';

export function RestaurantTable() {
  const restaurants = useRestaurants() ?? [];
  const columns = useMakeColumns(restaurants);

  return (
    <div className="RestaurantTable">
      <Table columns={columns} data={restaurants} />
    </div>
  );
}

function useMakeColumns() {
  return useMemo(
    () =>
      [
        makeNameColumn(),
        makeCityColumn(),
        makeStateColumn(),
        makePhoneNumberColumn(),
        makeGenresColumn(),
      ].filter(Boolean),
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

function makeStateColumn() {
  return {
    title: 'State',
    slug: 'state',
  };
}

function makePhoneNumberColumn() {
  return {
    title: 'Phone',
    slug: 'telephone',
  };
}

function makeGenresColumn() {
  return {
    title: 'Genres',
    slug: 'genre',
  };
}
