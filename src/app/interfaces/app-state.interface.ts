import { AppData } from './../store/classes/data.class'
import { AppEvents } from './../store/classes/events.class'

export interface AppState {
    data: AppData
    events: AppEvents
}