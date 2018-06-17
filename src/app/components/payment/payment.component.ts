import { StoreService } from './../../services/logic/store/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flatten } from 'lodash/fp';
import { Meal } from './../../interfaces/meal.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'payment',
    templateUrl: 'payment.component.html',
    styleUrls: ['./payment.scss'],
})

export class PaymentComponent {

    orderTotal$: Observable<number>
    paymentForm: FormGroup

    constructor(
    private store: Store<AppState>,
    private storeService: StoreService,
    private fb: FormBuilder
    ) {
        
    }

    ngOnInit() {
        this.paymentForm = this.createForm()
        this.orderTotal$ = this.storeService.getMealTotalPrice()
    }

    createForm() {
        return this.fb.group({
            creditCardNum: [null, [Validators.required]],
            tip: [null, [Validators.required]]
        })
    }

    makePayment() {
        // make progress bar animate then display message about meal being ready
    }

}