import fs from 'fs';

// --- Part One ---
const testDepths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

fs.readFile('./input.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	const depths = data
		.split('\n')
		.filter((dept) => Boolean(dept))
		.map((dept) => parseInt(dept));

	let increased = 0;
	depths.reduce((prev, curr) => {
		if (curr > prev) {
			increased++;
		}

		return curr;
	});
	console.log(increased);

	// --- Part Two ---
	let increases = 0;
	for (let i = 0; i < depths.length - 2; i++) {
		if (depths[i] + depths[i + 1] + depths[i + 2] < depths[i + 1] + depths[i + 2] + depths[i + 3]) {
			increases++;
		}
	}
	console.log(increases);
});
