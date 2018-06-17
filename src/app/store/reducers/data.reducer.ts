import { numToArrayOfNums } from './../../functions/format.function';
import { NUM_COURSES, ACTIVE_COURSE, UPDATE_MEALS, ADD_MEAL_TO_ORDER, REMOVE_MEAL_FROM_ORDER, CONSTRUCT_ORDER_ARRAY } from './../actions/food.actions';
import { AppData } from './../classes/data.class';
import { CustomAction } from './../interfaces/custom-action.interface';
import { merge, cloneDeep } from 'lodash/fp'

export function data(state: AppData = new AppData(), action: CustomAction) {
	switch (action.type) {

        case NUM_COURSES:
        case ACTIVE_COURSE:
            return merge(cloneDeep(state), action.payload)

        case UPDATE_MEALS:
            state.meals = merge(cloneDeep(state.meals), action.payload)
            return state

        case CONSTRUCT_ORDER_ARRAY:
            state.order = numToArrayOfNums(action.payload.numOfCourses).map(i => [])
            return state

        case ADD_MEAL_TO_ORDER:
            let addedCourseOrders = [...state.order[action.payload.activeCourse - 1], action.payload.meal]
            state.order = state.order.map((courseOrders, i) => i != action.payload.activeCourse - 1 ? courseOrders : addedCourseOrders)
            return state

        case REMOVE_MEAL_FROM_ORDER:
            let mealToRemoveIndex = state.order[action.payload.activeCourse - 1]
            .findIndex(meal => meal._id === action.payload.meal._id)
            let deleteCourseOrders = state.order[action.payload.activeCourse - 1] = state.order[action.payload.activeCourse - 1]
            .filter((meal, i) => i != mealToRemoveIndex ? meal : null)
            state.order = state.order.map((courseOrders, i) => i != action.payload.activeCourse - 1 ? courseOrders : deleteCourseOrders)            
            return state

		default:
			return state;
	}
}
