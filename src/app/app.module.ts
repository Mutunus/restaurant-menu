import { MenuModule } from './modules/menu/menu.module';
import { CoreModule } from './modules/core/core.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { routes } from './app.routing'
import { data } from './store/reducers/data.reducer'
import { events } from './store/reducers/events.reducer'


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot({ data, events }),
		RouterModule.forRoot(routes),
		MenuModule,
		HttpClientModule,
		CoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
