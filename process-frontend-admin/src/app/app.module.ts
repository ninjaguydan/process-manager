import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ProcessFormComponent} from './components/process-form/process-form.component';
import {ProcessListComponent} from './components/process-list/process-list.component';
import {CompletedProcessListComponent} from './components/completed-process-list/completed-process-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {StageFormComponent} from './components/stage-form/stage-form.component';
import {StageCardComponent} from './components/stage-card/stage-card.component';
import {HttpClientModule} from "@angular/common/http";
import {ProcessComponent} from './components/process/process.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { ProcessFinishedComponent } from './components/process-finished/process-finished.component';

const routes: Routes = [
	{path: "", component: ProcessListComponent},
	{path: "new", component: ProcessFormComponent},
	{path: "completed", component: CompletedProcessListComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProcessFormComponent,
		ProcessListComponent,
		CompletedProcessListComponent,
		StageFormComponent,
		StageCardComponent,
		ProcessComponent,
		CompletedProcessListComponent,
		ToastsComponent,
  ProcessFinishedComponent,
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		NgbModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	exports: [
		ProcessListComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
