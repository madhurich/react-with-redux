import React from 'react';

export const User = (props) => {

		return(
				<div>
					<h1>User Component</h1>
					<p>Name of User: <strong>{props.name}</strong></p>
				</div>
			);	
};

