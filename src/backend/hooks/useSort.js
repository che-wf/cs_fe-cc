import { useState } from 'react';

export function useSort() {
  const [sort, setSort] = useState({ key: 'name', order: 'asc' });
  return { sort, setSort };
}

export function sortByKey(array, sort) {
  return array.sort(function (a, b) {
    const x = a[sort.key];
    const y = b[sort.key];
    if (sort.order === 'asc') {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return x > y ? -1 : x < y ? 1 : 0;
  });
}
