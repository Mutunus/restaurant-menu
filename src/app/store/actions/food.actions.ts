import { Meal } from './../../interfaces/meal.interface';
import { Meals } from './../../interfaces/meals.interface';

export const TOGGLE_BUSY = 'toggle busy'
type toggleBusyPayload = { busy: boolean }
export const toggleBusy = (payload: toggleBusyPayload) => ({ type: TOGGLE_BUSY, payload })

export const NUM_COURSES = 'set number of courses'
type numCourses = { numOfCourses: number }
export const setNumOfCourses = (payload: numCourses) => ({ type: NUM_COURSES, payload })

export const ACTIVE_COURSE = 'set the course choice that is active'
type activeCourse = { activeCourse: number }
export const setActiveCourse = (payload: activeCourse) => ({ type: ACTIVE_COURSE, payload })

export const UPDATE_MEALS = 'set available menu meals'
type meals = Meals
export const updateMeals = (payload: meals) => ({ type: UPDATE_MEALS, payload })

export const CONSTRUCT_ORDER_ARRAY = 'add empty arrays equivalent to total number of courses'
export const constructOrderArray = (payload: numCourses) => ({ type: CONSTRUCT_ORDER_ARRAY, payload })

export const ADD_MEAL_TO_ORDER = 'add a meal to the order for course'
type courseAndMeal = { activeCourse: number, meal: Meal }
export const addMealToOrder = (payload: courseAndMeal) => ({ type: ADD_MEAL_TO_ORDER, payload })

export const REMOVE_MEAL_FROM_ORDER = 'remove a meal from the order for course'
export const removeMealFromOrder = (payload: courseAndMeal) => ({ type: REMOVE_MEAL_FROM_ORDER, payload })