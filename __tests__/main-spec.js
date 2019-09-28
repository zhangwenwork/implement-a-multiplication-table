const createMultiTable = require('../main');

it ('should get multi table', () => {
	let expectText =
            '2*2=4\n' +
            '2*3=6  3*3=9\n' +
            '2*4=8  3*4=12  4*4=16';
    expect(createMultiTable(2, 4)).toBe(expectText);
});