import './Cell.css';

export function Cell({ children, onClick, cellKey, className }) {
  return (
    <td
      className={`Cell ${className ?? ''}`}
      onClick={onClick}
      key={cellKey ?? ''}
    >
      {children}
    </td>
  );
}
