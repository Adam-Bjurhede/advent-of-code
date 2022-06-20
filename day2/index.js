import fs from 'fs';

// --- Part TWo ---

const test = [
	{ direction: 'forward', value: 5 },
	{ direction: 'down', value: 5 },
	{ direction: 'forward', value: 8 },
	{ direction: 'up', value: 3 },
	{ direction: 'down', value: 8 },
	{ direction: 'forward', value: 2 },
];

fs.readFile('./input.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	const instructions = data.split('\n').map((row) => {
		const instruction = {};

		const arr = row.split(' ');

		if (arr[0] && arr[1]) {
			instruction.direction = arr[0];
			instruction.value = Number(arr[1]);
		}
		return instruction;
	});

	const place = {
		x: 0,
		y: 0,
		aim: 0,
	};

	instructions.forEach((instruction) => {
		switch (instruction.direction) {
			case 'forward':
				place.y += place.aim * instruction.value;
				place.x += instruction.value;
				return;
			case 'up':
				place.aim -= instruction.value;
				return;
			case 'down':
				place.aim += instruction.value;
				return;
			default:
				return;
		}
	});

	console.log(place);
	console.log(place.x * place.y);
});

// --- Part One ---
// const test = [
// 	{ direction: 'forward', value: 5 },
// 	{ direction: 'down', value: 5 },
// 	{ direction: 'forward', value: 8 },
// 	{ direction: 'up', value: 3 },
// 	{ direction: 'down', value: 8 },
// 	{ direction: 'forward', value: 2 },
// ];

// const place = {
// 	x: 0,
// 	y: 0,
// 	aim: 0,
// };

// fs.readFile('./input.txt', 'utf-8', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	const instructions = data.split('\n').map((row) => {
// 		const instruction = {};

// 		const arr = row.split(' ');

// 		if (arr[0] && arr[1]) {
// 			instruction.direction = arr[0];
// 			instruction.value = Number(arr[1]);
// 		}
// 		return instruction;
// 	});

// 	instructions.forEach((instruction) => {
// 		switch (instruction.direction) {
// 			case 'forward':
// 				return (place.x += instruction.value);
// 			case 'up':
// 				return (place.y -= instruction.value);
// 			case 'down':
// 				return (place.y += instruction.value);
// 			default:
// 				return;
// 		}
// 	});

// 	console.log(place);
// 	console.log(place.x * place.y);
// });
