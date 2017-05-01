import { combineReducers } from 'redux';
import movies from './movies';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const Reducer = combineReducers({
	movies,
	routing: routerReducer,
    form: formReducer 
});

export default Reducer;
