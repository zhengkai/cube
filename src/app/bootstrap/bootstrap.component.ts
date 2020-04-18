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

	road = -1;
	roadArrow = 1;

	target = 0;

	roadWidth = 7;

	right = 10;
	left = 5;

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
		this.tickRoad2(step, cs);
		// this.tickRoad(step, cs);
		// this.tickBlink(step, cs);
		// this.tickSnow(step, cs);
		// this.tickMonica(step, cs);
	}

	tickRect(step: number, cs: CubeService) {
		const x = 1;
		const y = 2;
		const w = 3; // width
		const h = 4; // height
	}

	tickRoad2(step: number, cs: CubeService) {

		this.speed = 100;

		// cs.set(Math.random() * 15, Math.random() * 15, Math.random() * 0.7 + 0.3);
		cs.moveScreen(0, 1);

		const right = 16 - this.roadWidth;

		if (this.road < 0) {
			this.road = Math.floor(Math.random() * right);
			this.target = Math.floor(Math.random() * right);
		}

		let offset = 0;
		if (this.road < this.target) {
			offset = -1;
			this.road++;
		} else if (this.road > this.target) {
			offset = 1;
			this.road--;
		}
		if (this.road === this.target) {

			if (offset === 0) {

				this.target = Math.floor(Math.random() * right);

			} else if (offset > 0) {

				const rand = Math.floor(Math.random() * (right - this.target));
				this.target += rand;

			} else if (offset < 0) {

				const rand = Math.floor(Math.random() * (right - this.target));
				this.target = rand;
			}
		}

		// cs.set(this.target, 0, 0.3);
		cs.set(this.road, 0, 1);
		cs.set(this.road + this.roadWidth, 0, 1);

		const j = this.road + this.roadWidth - 1;
		for (let i = this.road + 1; i <= j; i++) {
			cs.set(i, 0, 0.3);
		}

		// for (起始条件; 判断允许; 每次循环做什么) {
		// }

		// cs.set(Math.random() * 15, 0, Math.random() * 0.7 + 0.3);
	}

	tickRoad(step: number, cs: CubeService) {

		this.speed = 100;

		cs.moveScreen(0, 1);

		this.road += this.roadArrow;

		// 路撞到右边
		if ((this.road + 7) >= this.right) {

			this.roadArrow = -1;
			this.right = Math.floor(Math.random() * 5) + 11;

		// 路撞到左边
		} else if (this.road <= this.left) {

			this.roadArrow = 1;
			this.left = Math.floor(Math.random() * 5);
		}

		// 路左
		cs.set(this.road, 0);
		// 路右
		cs.set(this.road + this.roadWidth, 0);
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
