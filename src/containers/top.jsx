import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(Top);