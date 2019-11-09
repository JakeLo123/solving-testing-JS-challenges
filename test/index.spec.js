const { destroyer, birthdayCakeCandles, balancedBrackets } = require('../index.js');
const { assert, expect } = require('chai');

describe('code challenges', function() {
	describe('destroyer', function() {
		it('returns initial array argument without additional arguments', function() {
			assert.deepEqual(destroyer([ 1, 2, 3 ], 1), [ 2, 3 ]);
			assert.deepEqual(destroyer([ 1, 2, 3 ], 1, 2), [ 3 ]);
			assert.deepEqual(destroyer([ 2, 3, 2, 3 ], 2, 3), []);
			assert.deepEqual(destroyer([ 'tree', 'hamburger', 53 ], 'tree', 53), [ 'hamburger' ]);
			assert.deepEqual(
				destroyer(
					[ 'possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht' ],
					'yacht',
					'possum',
					'trollo',
					'safari',
					'hotdog',
					'grandma',
					'bugati',
					'trojan'
				),
				[ 12, 92, 65 ]
			);
		});
	});
	describe('birthday cake candles', function() {
		it('returns an integer', function() {
			assert.isNumber(birthdayCakeCandles([ 3, 3, 1, 2 ]));
		});
		it('returns the number of candles your son can blow out', function() {
			expect(birthdayCakeCandles([ 3, 3, 1, 2 ])).to.equal(2);
			expect(birthdayCakeCandles([ 4, 3, 1, 2 ])).to.equal(1);
			expect(birthdayCakeCandles([ 4 ])).to.equal(1);
			expect(birthdayCakeCandles([ 3, 6, 11, 11, 19 ])).to.equal(1);
			expect(birthdayCakeCandles([ 3, 6, 11, 11, 19 ])).to.equal(1);
		});
	});
	describe('balancedBrackets', function() {
		it('returns true if brackets are balanced', function() {
			assert.equal(balancedBrackets('()'), true, '()');
			assert.equal(balancedBrackets('[()]'), true, '[()]');
			assert.equal(balancedBrackets('{[()}]'), false, '{[()}]');
			assert.equal(balancedBrackets('{[()]}'), true, '{[()]}');
			assert.equal(balancedBrackets('{[()]()}'), true, '{[()]()}');
			assert.equal(balancedBrackets('{()]()}'), false, '{()]()}');
		});
	});
});
