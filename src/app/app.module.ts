import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

import { IndexComponent } from './index/index.component';

@NgModule({
	declarations: [
		BootstrapComponent,
		IndexComponent,
	],
	imports: [
		BrowserModule,
		RoutingModule,
	],
	providers: [],
	bootstrap: [BootstrapComponent],
})
export class AppModule { }
