import { Observable } from 'rxjs';
import { Meals } from './../../interfaces/meals.interface';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'meal-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.scss'],
})

export class MenuComponent {

    public meals$: Observable<Meals>
    public activeCourse$: Observable<number>

    constructor(
    private store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.meals$ = this.store.select((state: AppState) => state.data.meals)
        this.activeCourse$ = this.store.select((state: AppState) => state.data.activeCourse)
    }

}