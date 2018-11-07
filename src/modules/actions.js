import axios from 'axios';

export const FETCH_NEW_COMICS = 'FETCH_NEW_COMICS';
export const FETCH_NEW_COMICS_SUCCESS = 'FETCH_NEW_COMICS_SUCCESS';
export const FETCH_NEW_COMICS_FAILURE = 'FETCH_NEW_COMICS_FAILURE';

const fetchNewComicsRequest = () => {
  return {
    type: FETCH_NEW_COMICS
  }
};


const fetchNewComicsSuccess = (comics) => {  
  return {
    type: FETCH_NEW_COMICS_SUCCESS,
    payload: {
      comics: comics
    }
  }
};

const fetchNewComicsFailure = (error) => {
  return {
    type: FETCH_NEW_COMICS_FAILURE,
    error: error
  }
};

export const fetchNewComics = () => {
  return (dispatch) => {
    dispatch(fetchNewComicsRequest());
    return axios.get(`http://localhost:8888/comics`)
      .then(res =>
        dispatch(fetchNewComicsSuccess(res.data))
      ).catch(err => 
        dispatch(fetchNewComicsFailure(err))
      );
  };
};