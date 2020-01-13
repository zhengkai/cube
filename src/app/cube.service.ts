import { Injectable } from '@angular/core';
import { Application, Container, Graphics } from 'pixi.js';

// http://pixijs.download/release/docs/index.html

@Injectable({
	providedIn: 'root',
})
export class CubeService {

	id = 1;

	app: Application;

	size = 1;

	center: Container;
	c: Container;

	star = [];

	constructor() {

		const app = new Application({
			resolution: window.devicePixelRatio || 1,
			resizeTo: window,
		});
		this.app = app;
		app.renderer.backgroundColor = 0x112233;

		const w = app.screen.width;
		const h = app.screen.height;

		const size = Math.min(w, h) * 0.95;

		this.size = Math.floor(size);

		const center = new Container();
		this.center = center;
		center.x = w / 2;
		center.y = h / 2;
		app.stage.addChild(center);

		const c = new Container();
		this.c = c;
		app.stage.addChild(c);
		c.x = (w - size) / 2;
		c.y = (h - size) / 2;

		this.initStar();
	}

	initStar(): void {

		const num = 16;

		const grid = this.size / num;

		const boxSize = grid * 0.6;

		for (let y = 0; y < num; y++) {
			const row = [];
			for (let x = 0; x < num; x++) {

				const g = new Graphics();
				g.beginFill(0xFFFF00);
				g.drawRect(- boxSize / 2, - boxSize / 2, boxSize, boxSize);

				g.x = (x + 0.5 - num / 2) * grid;
				g.y = (y + 0.5 - num / 2) * grid;

				row.push(g);
				this.center.addChild(g);
			}
			this.star.push(row);
		}
	}
}
