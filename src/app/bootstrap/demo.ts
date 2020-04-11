/* tslint:disable */
/* eslint-disable */

export function foo(star: any) {

	const step = 1;

	const x = step % 16;

	star[1][x] = x / 16;
	star[1][x - 1] = 0;

	const y = (step - 1) % 6;
	star[y + 1][x + 10] = 1;

	if (x === 0) {
		star[1][15] = 0;
	}

	for (let y = 2; y < 5; y++) {
		star[y][3] = 0.5;
	}

	const x2 = step % 16;

	star[5][x2] = 1;
}

export function snow(star: any) {
}
