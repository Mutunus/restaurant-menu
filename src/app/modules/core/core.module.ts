// primary purpose of this module is to ensure that lazy loaded modules that are providers for services do not create
// another instance of that service i.e. services remain singletons

import { NgModule } from '@angular/core';
import { providers } from './services'

@NgModule({
    providers
})

export class CoreModule {

}
