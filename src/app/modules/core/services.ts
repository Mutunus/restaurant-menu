import { StoreService } from './../../services/logic/store/store.service';
import { InitService } from './../../services/logic/init/init.service';
import { FoodService } from './../../services/api/food/food.service';

export const providers = [
    FoodService,
    InitService,
    StoreService
]