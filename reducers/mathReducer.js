

const mathState = {
	result: 4,
	lastValues: []
};

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

export default mathReducer;