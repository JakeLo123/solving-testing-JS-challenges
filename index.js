function destroyer(arr) {
	let items = Object.values(arguments);
	return arr.filter((item) => !items.includes(item));
}

function birthdayCakeCandles(arr) {
	let max = { height: 0, count: 0 };
	for (let i = 0; i < arr.length; ++i) {
		let candle = arr[i];
		if (candle > max.height) {
			max.height = candle;
			max.count = 1;
		} else if (candle === max.height) {
			max.count += 1;
		}
	}
	return max.count;
}

function balancedBrackets(str) {
	if (str.length % 2 !== 0) return false;
	let stack = [];
	let isOpener = { '(': true, '{': true, '[': true };
	let match = { '(': ')', '{': '}', '[': ']' };
	for (let i = 0; i < str.length; ++i) {
		let bracket = str[i];
		if (isOpener[bracket]) {
			stack.push(bracket);
		} else if (match[stack[stack.length - 1]] === bracket) {
			stack.pop();
			continue;
		} else {
			return false;
		}
	}
	if (stack.length) return false;
	else return true;
}

module.exports = {
	destroyer,
	birthdayCakeCandles,
	balancedBrackets
};
