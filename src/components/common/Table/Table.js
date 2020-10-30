import { useMemo } from 'react';

import { Cell } from './Cell';

import { useSort, SORT_ASC } from '../../../backend/hooks';

import './Table.css';

export function Table({ columns, data, refresh }) {
  const header = useMakeHeader(columns, refresh);
  const tableContents = useMakeTableContents(data, columns);

  return (
    <table className="Table">
      <thead>{header}</thead>
      <tbody>{tableContents}</tbody>
    </table>
  );
}

function useMakeHeader(columns, refresh) {
  const HeaderRow = useMemo(
    () =>
      columns.map((column, index) => (
        <HeaderCell
          column={column}
          index={index}
          refresh={refresh}
          key={`header-cell-${index}`}
        />
      )),
    [columns, refresh]
  );
  return <tr>{HeaderRow}</tr>;
}

function useMakeTableContents(data = [], columns = []) {
  const tableContents = useMemo(
    () =>
      data.map((datum, index) => {
        return (
          <tr key={`${datum.id}-row`}>
            {columns.map((column) => {
              const render = column.render ?? ((value) => value);
              return (
                <Cell cellKey={`${datum.id}-${column.slug}-cell-${index}`}>
                  {render(datum[column.slug])}
                </Cell>
              );
            })}
          </tr>
        );
      }),
    [data, columns]
  );

  if (!Boolean(data.length)) {
    return (
      <tr>
        <td colSpan={columns.length}>There are currently no results.</td>
      </tr>
    );
  }

  return tableContents;
}

function HeaderCell({ column, index, refresh }) {
  const { sort, setSort } = useSort();
  return (
    <Cell
      className="Header"
      cellKey={`${column.title}-header-${index}`}
      onClick={() => {
        setSort({
          key: column.slug,
          order: sort.key === column.slug ? !sort.order : SORT_ASC,
        });
        // refresh();
      }}
    >
      {column.title}
    </Cell>
  );
}
