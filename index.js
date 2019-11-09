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

module.exports = {
	destroyer,
	birthdayCakeCandles
};
