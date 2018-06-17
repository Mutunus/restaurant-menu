import { StoreService } from './../../services/logic/store/store.service';
import { Meal } from './../../interfaces/meal.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Component, OnInit } from '@angular/core';
import { removeMealFromOrder } from './../../store/actions/food.actions';

@Component({
    selector: 'order-list',
    templateUrl: 'order-list.component.html',
    styleUrls: ['./order-list.scss'],
})

export class OrderListComponent {

    order$: Observable<Array<Meal[]>>
    total$: Observable<number>

    constructor(
    private store: Store<AppState>,
    private storeService: StoreService
    ) {

    }

    ngOnInit() {
        this.order$ = this.store.select((state: AppState) => state.data.order)
        this.total$ = this.storeService.getMealTotalPrice()
    }
    
    removeFromCourse(activeCourse, meal) {
        this.store.dispatch(removeMealFromOrder({ activeCourse, meal }))
    }

}