import { createStore,compose ,applyMiddleware} from 'redux';
import reducers from './reducers/';
import thunkMiddleware from 'redux-thunk';

const configureStore = () => {
	//const persistedState = loadState();
	const persistedState = undefined;
	const store = createStore(
		reducers
		,persistedState
		,compose(applyMiddleware(thunkMiddleware)
		,window.devToolsExtension ? window.devToolsExtension() : undefined)
		);
	
	return store;
};

export default configureStore;