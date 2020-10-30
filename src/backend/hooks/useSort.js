import { useState } from 'react';

export const SORT_ASC = true;

export function useSort() {
  const [sort, setSort] = useState({ key: 'name', order: SORT_ASC });

  return { sort, setSort };
}

export function sortByKey(array, sort) {
  return array.sort(function (a, b) {
    const x = a[sort.key];
    const y = b[sort.key];
    if (sort.order === SORT_ASC) {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return x > y ? -1 : x < y ? 1 : 0;
  });
}
