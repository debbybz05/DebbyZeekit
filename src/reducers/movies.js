import * as types from '../constants/ActionTypes'

const moviesReducer = (state={},action) => {
	switch  (action.type) {
	case types.REQUEST_GET_MOVIES:
		return Object.assign({}, state, {
			isFetching: true
		});
	case types.RECEIVE_GET_MOVIES:
	//console.log("RECEIVE_GET_MOVIES:  "+JSON.stringify(action.movies))
		return Object.assign({}, state,
			{isFetching:false}
			,(action.error ? {error: action.error}: null)
			,{movies: action.movies}
		);
	case types.UPDTE_SEARCH_WORD:
		return Object.assign({}, state,
			{searchWord:action.searchWord} 
		);
	case types.UPDTE_SEARCH_TYPE:
		return Object.assign({}, state,
			{searchType:action.searchType} 
		);
	case types.UPDTE_SEARCH_YEAR:
		return Object.assign({}, state,
			{searchYear:action.searchYear} 
		);
	default:
		return state;
	}
};

export default moviesReducer;