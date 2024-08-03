import React from 'react';
import style from './Pangination.module.scss'

export const Pagination: React.FC = () => {
  return (
    <>
      <nav
        className={style.pangination}
        role="navigation"
        aria-label="pagination"
      >
        <button
          className={style.button}
        >
          Prev
        </button>
        <li className={`${style.page} ${style.pageActive}`}>1</li>
        <li className={style.page}>2</li>
        <li className={style.page}>3</li>
        <button
          className={style.button}
        >
          Next
        </button>
      </nav>
    </>
  );
};