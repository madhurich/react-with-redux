export function addNum(num){
	return {
		type: 'ADD',
		payLoad: num
	};
}

export function multNum(num){
	return {
		type: 'MULTIPLY',
		payLoad: num
	};
}

export function subNum(num){
	return {
		type: 'SUBTRACT',
		payLoad: num
	};
}