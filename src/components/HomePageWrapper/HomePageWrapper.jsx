import React from 'react';
import css from './styles.module.css';
const HomePageWrapper = ({ children }) => {
  return <div className={css.home_page_wrapper}>{children}</div>;
};

export default HomePageWrapper;
