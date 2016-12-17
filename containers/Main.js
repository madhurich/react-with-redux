import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../actions/userActions';


class Main extends React.Component{
	render(){
		return(
				<div>
					<h1>Main Component</h1>
					<button onClick={() => this.props.setName("hello how are you")}>Change name!</button>
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

const mapDispatchToProps = (dispatch) => {
	return {
		setName : (name) => {
			dispatch(setName(name));
			
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);