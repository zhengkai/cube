import { Injectable } from '@angular/core';
import { Application, Container, Graphics } from 'pixi.js';

// http://pixijs.download/release/docs/index.html

type Star = Array<Array<number>>;
type StarGraphics = Array<Array<Graphics>>;

type Callback = () => void;

@Injectable({
	providedIn: 'root',
})
export class CubeService {

	id = 1;

	app: Application;

	size = 1;

	h = 16;
	w = 16;

	center: Container;
	c: Container;

	star: Star = [];
	starGraph: StarGraphics = [];

	click: Callback;

	clear() {
		this.star.forEach(row => {
			row.forEach((_, i) => {
				row[i] = 0;
			});
		});

		this.starGraph.forEach(row => {
			row.forEach((_, i) => {
				row[i].alpha = 0.05;
			});
		});
	}

	set(x: number, y: number, color = 1) {

		y = y | 0;
		x = x | 0;

		if (y >= this.star.length || y < 0) {
			return;
		}

		const row = this.star[y];
		if (x >= row.length || x < 0) {
			return;
		}

		const v = Math.min(1, Math.max(0, color));
		row[x] = v;
		this.starGraph[y][x].alpha = Math.max(0.05, v);
		// console.log(JSON.stringify(this.star));
	}

	loop(x: number, y: number, color = 1) {

		const height = this.star.length;

		y = y % height;
		if (y < 0) {
			y += height;
		}

		const width = this.star[y].length;
		x = x % width;
		if (x < 0) {
			x += width;
		}

		this.set(x, y, color);
	}

	setFull(a: Star = []) {

		a.every((row, y) => {

			if (y >= this.star.length) {
				return false;
			}

			const starRow = this.star[y];

			row.forEach((v, x) => {
				if (y >= this.star.length) {
					return false;
				}

				v = Math.min(1, Math.max(0, v));

				this.starGraph[y][x].alpha = Math.max(0.05, v);

				// console.log(x, y, v);

				starRow[x] = v;
				return true;
			});

			return true;
		});
	}

	get(x: number, y: number): number {

		if (y >= this.star.length || y < 0) {
			return 0;
		}

		const row = this.star[y];
		if (x >= row.length || x < 0) {
			return 0;
		}

		return row[x];
	}

	getFull(): Star {

		const re = [];

		this.star.forEach(row => {
			re.push(row.slice());
		});

		return re;
	}

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
		this.initUI();
	}

	initUI(): void {

		const btn = new Graphics();
		btn.beginFill(0xDDEEFF);
		btn.drawRect(10, 10, 100, 50);
		btn.interactive = true;
		btn.alpha = 0.8;
		btn.cursor = 'pointer';

		btn.on('mouseover', () => {
			btn.alpha = 1;
		});
		btn.on('mouseout', () => {
			btn.alpha = 0.8;
		});
		btn.on('tap', () => {
			this.click && this.click();
		});
		btn.on('click', () => {
			this.click && this.click();
		});

		this.app.stage.addChild(btn);
	}

	initStar(): void {

		const num = 16;

		const grid = this.size / num;

		const boxSize = grid * 0.6;

		for (let y = 0; y < num; y++) {
			const row = [];
			const starRow = [];
			for (let x = 0; x < num; x++) {

				const g = new Graphics();
				g.beginFill(0xFFFF00);
				g.drawRect(- boxSize / 2, - boxSize / 2, boxSize, boxSize);
				g.interactive = true;
				g.alpha = 0.05;

				g.on('click', () => {
					this.starClick(x, y);
				});

				g.x = (x + 0.5 - num / 2) * grid;
				g.y = (y + 0.5 - num / 2) * grid;

				starRow.push(0);

				row.push(g);
				this.center.addChild(g);
			}
			this.star.push(starRow);
			this.starGraph.push(row);
		}
	}

	starClick(x: number, y: number) {
		console.log('click', x, y);
		const g = this.starGraph[y][x];
		g.alpha = Math.random();
	}
}
