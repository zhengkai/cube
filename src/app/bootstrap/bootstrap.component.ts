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

	constructor(
		private el: ElementRef,
		private cs: CubeService,
	) {
		el.nativeElement.appendChild(cs.app.view);

		cs.click = () => {
			this.stop = !this.stop;
		};

		let i = 0;
		window.setInterval(() => {
			if (this.stop) {
				return;
			}
			i++;
			this.tick(i, cs);
		}, 500);
	}

	tick(step: number, cs: CubeService) {

		const star = cs.get();

		const x = step % 16;

		star[1][x] = x / 16;
		star[1][x - 1] = 0;

		/*
		const x = step % 16;

		star[1][x] = x / 16;
		star[1][x - 1] = 0;

		if (x === 0) {
			star[1][15] = 0;
		}

		for (let y = 2; y < 5; y++) {
			star[y][3] = 0.5;
		}

		const x2 = step % 16;

		star[5][x2] = 1;
		 */

		cs.set(star);
	}
}
