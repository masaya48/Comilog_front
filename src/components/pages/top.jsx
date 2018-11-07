import React, { Component } from 'react';
import ComicCards from '../organisms/comic-cards';

const styles = {
  cards: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '0 auto'
  }
};

export default class Top extends Component {

  constructor(props) {
    super(props);
    this.props.fetchNewComics();
  }
  
  render() {
    const { comics } = this.props;
    return (
      <main>
        <section style={styles.cards}>
          {comics && <ComicCards comics={comics}></ComicCards>}
        </section>
      </main>
    );
  }
}