import { PaymentComponent } from './components/payment/payment.component';
import { OrderComponent } from './components/order/order.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: '**',
        component: WelcomeComponent
    }
]