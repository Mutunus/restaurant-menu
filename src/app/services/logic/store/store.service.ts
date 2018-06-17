import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces/app-state.interface';
import { cloneDeep, flatten } from 'lodash/fp';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

    constructor(
    private store: Store<AppState>
    ) {
		
    }

    getObservableValue(obs$: Observable<any>): any { // retrieves a COPY! of items from the store
		let result: any
		obs$.subscribe(value => result = cloneDeep(value))
		.unsubscribe()
		return result
	}

    getMealTotalPrice(): Observable<number> {
        return this.store.select((state: AppState) => flatten(state.data.order)
        .reduce((acc, meal) => acc += meal.price, 0)) 
    }

}

