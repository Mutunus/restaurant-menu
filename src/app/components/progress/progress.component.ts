import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app-state.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl: 'progress.component.html',
    styleUrls: ['./progress.scss'],
})

export class ProgressComponent {

    @Input() mode: string
    @Input() message: string
    public progress$: Observable<number>

    constructor(
    private store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.progress$ = this.store.select((state: AppState) => Math.ceil((state.data.activeCourse / state.data.numOfCourses) * 100))
    }
    

}