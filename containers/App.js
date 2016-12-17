import React from 'react';
import Main from './Main';
import {User} from '../components/User';//when you are not extending the user specify curly braces.
import {connect} from 'react-redux';


class App extends React.Component{
	render(){
		return (
				<div>
					<Main/>
					<User name={this.props.user.name}/>
				</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	};	
};



export default connect(mapStateToProps)(App);