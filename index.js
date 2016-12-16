/*import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import User from './components/User';

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			name: "madhuri"
		};		
	}
	changeUserName(newName){
			this.setState({
				name: newName
			});
		}

	render(){
		return (
				<div>
					<Main changeName={this.changeUserName.bind(this)}/>
					<User name={this.state.name}/>
				</div>
			);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));*/

import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const mathState = {
	result: 4,
	lastValues: []
};

const userState = {
	name: "madhuri",
	age: 22
};

//creating the reducer and setting how the actions to be
//performed
const mathReducer = (state = mathState, action) => {
	switch(action.type){
		case "ADD":
			state = {
				result: state.result,
				lastValues: state.lastValues,//here ... s not working as REST
				mad: state.result + action.payLoad,
				lastValues: [...state.lastValues, action.payLoad]//but here its working as spread,
																//due to the plugin added.
				};
					
		break;

		case "MULTIPLY":
			state = {
				result: state.result,
				lastValues: state.lastValues,
				mad: state.result * action.payLoad,
				lastValues: [...state.lastValues, action.payLoad]
			};
			
		
		break;

		/*case "ALERT":
		alert("alerting");
		break;*/

		case "SUBTRACT":
		state = state - action.payLoad;
		break;

		
	}
	return state;
};

const userReducer = (state = userState, action) => {
	switch(action.type){
		case "SET_NAME":
			state = {
				name: state.name,
				age: state.age,
				name: action.payLoad
				};			
		break;

		case "SET_AGE":
			state = {
				age: action.payLoad
			};
		break;
		
	}
	return state;
};

const madLogger = (store) => (next) => (action) =>{
	console.log("my logger action", action);
	next(action);
};

const store = createStore(
combineReducers({mathReducer, userReducer}), 
{}, 
applyMiddleware(logger(), madLogger)
);//creating the store and passing in
									//the old state and the reducer-->this contains the
									//new returned state, created in the reducer.

store.subscribe(() => {
	console.log("updated with new state", store.getState());
});//this is to let us know whether the new state is returned or not

//dispatching what actions we need to perform
store.dispatch({
	type: "ADD",
	payLoad: 43
});

store.dispatch({
	type: "ADD",
	payLoad: 20
});

store.dispatch({
	type: "MULTIPLY",
	payLoad: 43
});

/*store.dispatch({
	type: "SUBTRACT",
	payLoad: 3
});*/

store.dispatch({
	type: "SET_NAME",
	payLoad: "mummy"
});

store.dispatch({
	type: "SET_AGE",
	payLoad: 25
});


/*store.dispatch({
	type: "ALERT"
});*/