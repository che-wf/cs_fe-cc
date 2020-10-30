import { useMemo } from 'react';

import { useRefreshRestaurants, useRestaurants } from '../../backend/hooks';

import { Table } from '../common/Table';

import './RestaurantTable.css';

export function RestaurantTable() {
  const { restaurants } = useRestaurants();
  const columns = useMakeColumns(restaurants);

  return (
    <div className="RestaurantTable">
      <Table
        columns={columns}
        data={restaurants}
        refresh={useRefreshRestaurants}
      />
    </div>
  );
}

function useMakeColumns() {
  return useMemo(
    () => [
      makeNameColumn(),
      makeCityColumn(),
      makeStateColumn(),
      makePhoneNumberColumn(),
      makeGenresColumn(),
    ],
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
    render: (number) => {
      return <a href={`tel:${cleanPhoneNumber(number)}`}>{number}</a>;
    },
  };
}

function makeGenresColumn() {
  return {
    title: 'Genres',
    slug: 'genre',
    render: (genres) => {
      return genres.split(',').sort().join(', ');
    },
  };
}

function cleanPhoneNumber(number) {
  return number
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace('-', '')
    .replace(/^/, '+1');
}
