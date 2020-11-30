import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="CMP-Home">
          <Logo />
        </Link>
        <Link className={styles.pedidos} to="/pedidoPorHora">
          Pedidos por Hora
        </Link>
        <Link className={styles.login} to="/login">
          Login / Cadastre-se
        </Link>
      </nav>
    </header>
  );
};

export default Header;
