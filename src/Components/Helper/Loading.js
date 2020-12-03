import React from 'react';
import styles from './Loading.module.css';
import load from '../Assets/loading.gif';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <img src={load} alt="Carregando..." />
      </div>
    </div>
  );
};

export default Loading;
