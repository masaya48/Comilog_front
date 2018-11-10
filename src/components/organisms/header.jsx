import React from 'react';
import Logo from '../atoms/logo';
import Menu from '../molecules/menu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '2px solid #AAA',
    position: 'fixed',
    width: '100%',
    backgroundColor: '#FFFFFF',
    top: 0
  }
};

const Header = () => (
  <header style={styles.header}>
    <Logo path={'http://placehold.it/200x40'}></Logo>
    <Menu></Menu>
  </header>
);

export default Header;