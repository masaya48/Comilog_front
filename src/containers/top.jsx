import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Top from '../components/pages/top';
import { fetchNewComics } from '../modules/actions';

const mapStateToProps = state => {    
  return { comics: state.comicReducer.comics }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNewComics: () => dispatch(fetchNewComics())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Top));