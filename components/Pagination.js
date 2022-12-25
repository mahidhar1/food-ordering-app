import css from "./Pagination.module.css";

export const Pagination = ({ current, onChange, hasNext, disabled }) => {
  const increment = disabled ? () => {} : () => onChange(current + 1);
  const decrement = disabled ? () => {} : () => onChange(current - 1);
  const setPage = disabled ? () => () => {} : (num) => () => onChange(num);

  const active = `${css["pagination-button"]} ${css.active}`;
  return (
    <div className={css.pagination}>
      <div className={css.flex}>
        {current > 1 && (
          <PaginationHasPrev
            value={current - 1}
            onDecrement={decrement}
            onSet={setPage(current - 1)}
          />
        )}
        <div className={active}>
          <span>{current}</span>
        </div>
        {hasNext && (
          <PaginationHasNext
            value={current + 1}
            onIncrement={increment}
            onSet={setPage(current + 1)}
          />
        )}
      </div>
    </div>
  );
};

const PaginationHasNext = ({ value, onSet, onIncrement }) => {
  const more = `${css["pagination-button"]} ${css.more}`;
  return (
    <>
      <div className={css["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
      <div className={more}>Ellipsis icon</div>
      <div className={css["pagination-button"]} onClick={onIncrement}>
        Right icon
      </div>
    </>
  );
};

const PaginationHasPrev = ({ value, onSet, onDecrement }) => {
  const more = `${css["pagination-button"]} ${css.more}`;
  return (
    <>
      <div className={css["pagination-button"]} onClick={onDecrement}>
        Left icon
      </div>
      {value >= 2 && <div className={more}>ellipsis icon</div>}
      <div className={css["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
    </>
  );
};
