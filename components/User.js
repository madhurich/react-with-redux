import React from 'react';

class User extends React.Component{

	render(){
		return(
				<div>
					<h1>User Component</h1>
					<p>Name of User: {this.props.name}</p>
				</div>
			);
	}
}

export default User;