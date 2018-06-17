import { TOGGLE_BUSY } from './../actions/food.actions';
import { AppEvents } from './../classes/events.class';
import { CustomAction } from './../interfaces/custom-action.interface';
import { merge, cloneDeep } from 'lodash/fp'

export function events(state: AppEvents = new AppEvents(), action: CustomAction) {
    switch (action.type) {

        case TOGGLE_BUSY:
            return merge(cloneDeep(state), action.payload)

        default:
            return state;
    }
}
