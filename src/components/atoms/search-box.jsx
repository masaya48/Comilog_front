import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const styles = {
  searchIcon: {
    position: 'absolute',
    top: '12px',
    right: '30px'
  }
};

const SearchBox = () => (
  <div>
    <input type="text" placeholder="キーワードで検索"></input>
    <FontAwesomeIcon icon={faSearch} style={styles.searchIcon}></FontAwesomeIcon>
  </div>
);

export default SearchBox;