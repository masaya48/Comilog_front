import {
  FETCH_NEW_COMICS, FETCH_NEW_COMICS_SUCCESS, FETCH_NEW_COMICS_FAILURE 
} from './actions';

const initalState = {
  isFetching: false,
  comics: []
};

const comicsReducer = (state = initalState, action) => {    
  switch (action.type) {
    case FETCH_NEW_COMICS:
      return {
        ...state,
        isFetching: true,
        comics: []
      };
    case FETCH_NEW_COMICS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comics: action.payload.comics
      };
    case FETCH_NEW_COMICS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default comicsReducer;