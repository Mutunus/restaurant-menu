import { addMealToOrder } from './../../store/actions/food.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Meal } from './../../interfaces/meal.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'menu-item',
    templateUrl: 'menu-item.component.html',
    styleUrls: ['./menu-item.scss'],
})

export class MenuItemComponent {

    @Input() public meal: Meal
    
    public activeCourse$: Observable<number>
    public mealOrdersForThisCourse: number

    constructor(
    private store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.activeCourse$ = this.store.select((state: AppState) => state.data.activeCourse)
    }

    addToCourse(activeCourse, meal) {
        this.store.dispatch(addMealToOrder({ activeCourse, meal }))
    }

}