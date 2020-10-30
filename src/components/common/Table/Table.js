import { useMemo } from 'react';
import { Cell } from './Cell';

export function Table({ columns, data }) {
  const header = useMemo(
    () =>
      columns.map((column, index) => (
        <Cell key={`${column.title}-header-${index}`}>{column.title}</Cell>
      )),
    [columns]
  );

  const tableContents = useMemo(
    () =>
      data.map((datum, index) => {
        return (
          <tr key={`${datum.id}-row`}>
            {columns.map((column) => {
              return <Cell>{datum[column.slug]}</Cell>;
            })}
          </tr>
        );
      }),
    [data, columns]
  );

  if (!data) {
    return 'There are currently no results.';
  }

  return (
    <table>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{tableContents}</tbody>
    </table>
  );
}
