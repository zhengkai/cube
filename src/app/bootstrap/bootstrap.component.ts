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
		const row = star[0].slice().fill(0);

		const size = row.length;

		// console.log('get', star);

		let x;

		const r1 = row.slice();
		x = step % size;
		r1[x] = 1;
		star[3] = r1;

		const r2 = row.slice();
		x = (step + 2) % size;
		r2[x] = 1;

		x = (step - 2 + size) % size;
		r2[x] = 1;
		star[7] = r2;

		const y = Math.floor((step / 3) % size);

		let prev = y - 1;
		if (prev < 0) {
			prev += size;
		}
		star[prev][3] = 0;
		star[y][3] = 0.5;

		// console.log('set', star);

		cs.set(star);
	}
}
