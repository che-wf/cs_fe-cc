import { useMemo } from 'react';
import { Cell } from './Cell';

import './Table.css';

export function Table({ columns, data }) {
  const header = useMakeHeader(columns);
  const tableContents = useMakeTableContents(data, columns);

  return (
    <table className="Table">
      <thead>{header}</thead>
      <tbody>{tableContents}</tbody>
    </table>
  );
}

function useMakeHeader(columns) {
  const HeaderRow = useMemo(
    () =>
      columns.map((column, index) => (
        <Cell key={`${column.title}-header-${index}`}>{column.title}</Cell>
      )),
    [columns]
  );
  return <tr>{HeaderRow}</tr>;
}

function useMakeTableContents(data, columns) {
  const tableContents = useMemo(
    () =>
      data.map((datum) => {
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

  return tableContents;
}
