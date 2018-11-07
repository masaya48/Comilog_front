import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const styles = {
  card: {
    marginTop: '20px'
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto'
  }
}

export default class ComicCard extends Component {
  render() {
    const { title, frontCover, likeBuy, like } = this.props;
    return (
      <div style={styles.card}>
        <figure>
          <img src={frontCover} alt="コミック画像"/>
          <figcaption>{title}</figcaption>
          <div style={styles.icons}>
            <div>
              <FontAwesomeIcon icon={faShoppingBag} className="main-color"></FontAwesomeIcon>
              <span>{likeBuy}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faTag} className="sub-color"></FontAwesomeIcon>
              <span>{like}</span>
            </div>
          </div>
        </figure>
      </div>
    );
  }
}