import React from 'react';

class Main extends React.Component{
	render(){
		return(
				<div>
					<h1>Main Component</h1>
					<button onClick={() => this.props.changeName("daddy")}>Change name!</button>
				</div>
			);
	}
}

export default Main;