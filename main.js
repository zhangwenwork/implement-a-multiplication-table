function createMultiTable (left, right) {
	let tableString = '';
	let multiply = left;
	for (var i = 0; i < right - left + 1; i++) {
		multiply = left + i;
		let row = '';
		for (var j = 0; j <= i; j++) {
			row = row + (left+j) + '*' + multiply + '=' + (left+j)*multiply
			if (j < i ) {
				row += '  '
			}
		}
		
		tableString += row;

		if (i < right - left) {
			tableString += '\n'
		}

	}

    return tableString;
}

module.exports = createMultiTable;