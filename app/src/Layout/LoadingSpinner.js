import React from 'react';
import style from '../../4th-css/admincss/menu.module.css';

const LoadingSpinner = () => {
  return (
    <div className={style.loading_spinner}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;