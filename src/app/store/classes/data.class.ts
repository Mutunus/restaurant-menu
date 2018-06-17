import { Meals } from './../../interfaces/meals.interface';
import { Meal } from './../../interfaces/meal.interface';

export class AppData {

    numOfCourses: number
    activeCourse: number
    meals: Meals
    order: Array<Meal[]>

    constructor() {
        this.numOfCourses = undefined
        this.activeCourse = undefined
        this.meals = undefined
        this.order = []
    }

}