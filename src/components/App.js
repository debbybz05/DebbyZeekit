import React, {Component} from 'react';
import './App.css';
import MyPage from '../components/MyPage';

class App extends Component {

	render() {
		return (
			<div className="main"> 	
		    	<div>
		          	{this.props.children}
		        </div>
		       <MyPage/>
		    </div>
		);
	}
}

export default App;

