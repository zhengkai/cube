import { Component, ElementRef } from '@angular/core';
import { Application } from 'pixi.js';
import { CubeService } from '../cube.service';

@Component({
	selector: 'app-root',
	templateUrl: './bootstrap.component.html',
	styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent {

	title = 'Cube';

	constructor(private el: ElementRef, private cs: CubeService) {
		el.nativeElement.appendChild(cs.app.view);
	}
}
