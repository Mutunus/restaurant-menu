import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces/app-state.interface';
import { toggleBusy, updateMeals } from './../../../store/actions/food.actions';
import { Observable } from 'rxjs';
import { FoodService } from './../../api/food/food.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InitService {

    constructor(
    private food: FoodService,
    private store: Store<AppState>
    ) {
		
    }

	init(): void {
        this.food.getMenu()
        .subscribe(meals => {
            this.store.dispatch(updateMeals(meals))
            this.store.dispatch(toggleBusy({ busy: false }))
        })
    }

}

