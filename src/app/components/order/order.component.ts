import { Router } from '@angular/router';
import { Meals } from './../../interfaces/meals.interface';
import { setActiveCourse } from './../../store/actions/food.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'order',
    templateUrl: 'order.component.html',
    styleUrls: ['./order.scss'],
})

export class OrderComponent {

    public orderComplete$: Observable<boolean>
    public activeCourse$: Observable<number>
    public progressBarMode: 'determinate' | 'indeterminate'
    public progressBarMessage: string

    constructor(
    private store: Store<AppState>,
    private router: Router
    ) {
        
    }

    ngOnInit() {
        this.activeCourse$ = this.store.select((state: AppState) => state.data.activeCourse)
        this.orderComplete$ = this.store.select((state: AppState) => state.data.numOfCourses <= state.data.activeCourse)
    }

    nextCourse(activeCourse: number) {
        this.store.dispatch(setActiveCourse({ activeCourse }))
    }

    navigateToPayment() {
        this.router.navigateByUrl('payment')
    }

    makePayment() {
        this.progressBarMode = 'indeterminate'
        this.progressBarMessage = 'Making payment...'
        setTimeout(() => {
            this.progressBarMode = 'determinate'
            this.progressBarMessage = 'Payment completed. Your first course will be served in 5 minutes.'
        }, 2500)
    }

}