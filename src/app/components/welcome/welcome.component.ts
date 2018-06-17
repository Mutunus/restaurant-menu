import { setNumOfCourses, setActiveCourse, constructOrderArray } from './../../store/actions/food.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import constants from './../../config/constants'
import { Router } from '@angular/router';
import { numToArrayOfNums } from './../../functions/format.function'

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['./welcome.scss'],
})

export class WelcomeComponent {

    public welcomeForm: FormGroup
    public courseOptions: number[]

    constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
    ) {
        
    }

    ngOnInit() {
        this.welcomeForm = this.createForm()
        this.courseOptions = numToArrayOfNums(constants.maxNumCourses).slice(constants.minNumCourses - 1)
    }

    createForm() {
        return this.fb.group({
            numOfCourses: [constants.minNumCourses, Validators.required]
        })
    }

    toChooseDishes(numOfCourses: number) {
        this.store.dispatch(setNumOfCourses({ numOfCourses }))
        this.store.dispatch(constructOrderArray({ numOfCourses }))
        this.store.dispatch(setActiveCourse({ activeCourse: 1 }))
        this.router.navigateByUrl('order')
    }

}