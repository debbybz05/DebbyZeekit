import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch';


function requestGetMovies(requestParams) {
	return {
		type: types.REQUEST_GET_MOVIES,
		requestParams
	};
}
function receiveGetMovies(requestParams, json) {
	//console.log("receiveGetMovies:  "+JSON.stringify(json))
	return {
		type: types.RECEIVE_GET_MOVIES,
		requestParams,
		movies: json.Search
	}
}
export function fetchGetMovies(requestParams) {
	console.log("fetchGetMovies "+requestParams)
	return function (dispatch) {
		dispatch(requestGetMovies(requestParams));
		return fetch('http://www.omdbapi.com/'+requestParams)
		.then(response => response.json())
		.then(json =>{//console.log("json "+JSON.stringify(json))
			dispatch(receiveGetMovies(requestParams, json));
		})
		.catch(function (err){
			console.log(err);
		});
	};
}
export function updateSearchWord(searchWord) {
		//console.log("updateSearchWord "+searchWord)
	return({
		type: types.UPDTE_SEARCH_WORD,
		searchWord
	});
}
export function updateSearchType(searchType) {
		//console.log("updateSearchWord "+searchWord)
	return({
		type: types.UPDTE_SEARCH_TYPE,
		searchType
	});
}
export function updateSearchYear(searchYear) {
		//console.log("updateSearchWord "+searchWord)
	return({
		type: types.UPDTE_SEARCH_YEAR,
		searchYear
	});
}