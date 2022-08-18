import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ToastsComponent} from './components/toasts/toasts.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ProcessListComponent} from './components/process-list/process-list.component';
import {ProcessComponent} from './components/process/process.component';
import { ProcessStartComponent } from './components/process-start/process-start.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProcessListComponent,
		ProcessComponent,
		ToastsComponent,
  ProcessStartComponent,
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
