
const userState = {
	name: "madhuri heart beat",
	age: 22
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

export default userReducer;