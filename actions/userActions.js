export function setName(name){
	return {
		type: 'SET_NAME',
		payLoad: name
	};
}

export function setAge(age){
	return {
		type: 'SET_AGE',
		payLoad: age
	};
}