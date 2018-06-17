import { Meals } from './../../../interfaces/meals.interface';
import { Meal } from './../../../interfaces/meal.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class FoodService {

    constructor(
    private http: HttpClient
    ) {
        
    }

    getMenu(): Observable<Meals> {
        return this.http.get<Meal[]>('http://timduncandeveloper.com:3000/api/dishes')
        .pipe(map(x => x.reduce((acc, meal) => {
                acc[meal.type].push(meal)
                return acc
            }, { dessert: [], main: [], starter: [] })
        ))
    }

}

