import React, { Component } from 'react';
import ComicCard from '../molecules/comic-card';

export default class ComicCards extends Component {

  render() {
    const { comics } = this.props;

    return (
      comics.map((comic, index) => {
        return (
          <ComicCard
            title={comic.title}
            frontCover={comic.front_cover}
            likeBuy={120}
            like={300}
            key={index}
            ></ComicCard>)
      })
    );
  }
}