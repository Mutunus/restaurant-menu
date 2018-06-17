import { AppState } from './interfaces/app-state.interface';
import { InitService } from './services/logic/init/init.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	busy$: Observable<boolean>

	constructor(
	private initService: InitService,
	private store: Store<any>
	) {

	}

	ngOnInit() {
		this.busy$ = this.store.select((state: AppState) => state.events.busy)
		this.initService.init()
	}

}
