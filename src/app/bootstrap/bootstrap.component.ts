import { Component, ElementRef } from '@angular/core';
import { CubeService } from '../cube.service';

@Component({
	selector: 'app-root',
	templateUrl: './bootstrap.component.html',
	styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent {

	title = 'Cube';

	stop = false;

	x = 0;
	y = -1;
	arrow = 1;

	speed = 500;

	step = 0;

	constructor(
		private el: ElementRef,
		private cs: CubeService,
	) {
		el.nativeElement.appendChild(cs.app.view);

		cs.click = () => {
			this.stop = !this.stop;
		};

		this.loop();
	}

	loop() {
		if (this.stop) {
			return;
		}

		this.tick(this.step, this.cs);
		this.step++;

		window.setTimeout(() => {
			this.loop();
		}, this.speed);
	}

	tick(step: number, cs: CubeService) {
		this.tickFall(step, cs);
		// this.tickBlink(step, cs);
		// this.tickSnow(step, cs);
		// this.tickMonica(step, cs);
	}

	tickFall(step: number, cs: CubeService) {

		// cs.set(Math.random() * 15, Math.random() * 15, Math.random() * 0.7 + 0.3);

		cs.moveScreen(0, 1);

		cs.set(Math.random() * 15, 0, Math.random() * 0.7 + 0.3);
	}

	// 两排雪
	tickDoubleSnow(step: number, cs: CubeService) {
		console.log(step, cs);
	}

	// 棋盘格闪烁
	tickChess(step: number, cs: CubeService) {
		console.log(step, cs);
	}

	tickSnow(step: number, cs: CubeService) {

		this.speed = 100;

		this.y++;

		cs.set(this.x, this.y, 1);
		cs.set(this.x, this.y - 1, 0);

		if (this.y >= 15 || cs.get(this.x, this.y + 1) === 1) {

			this.y = -1;
			this.x += this.arrow;

			if (this.x > 15) {
				this.arrow = -1;
				this.x = 15;
			} else if (this.x < 0) {
				this.arrow = 1;
				this.x = 0;
			}
		}
	}

	tickBlink(step: number, cs: CubeService) {

		this.speed = 1000;

		const blink = step % 2;

		const matrix = cs.getFull();

		for (let y = 0; y < matrix.length; y++) {

			const row = matrix[y];

			for (let x = 0; x < row.length; x++) {

				if (x % 2 === blink) {

					row[x] = 1;

				} else {

					row[x] = 0;
				}
			}
		}

		cs.setFull(matrix);
	}
}
