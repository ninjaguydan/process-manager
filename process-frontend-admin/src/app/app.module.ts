import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ProcessFormComponent} from './components/process-form/process-form.component';
import {ProcessListComponent} from './components/process-list/process-list.component';
import {ProcessFinishedComponent} from './components/process-finished/process-finished.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {StageFormComponent} from './components/stage-form/stage-form.component';
import {StageCardComponent} from './components/stage-card/stage-card.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
	{path: "", component: ProcessListComponent},
	{path: "new", component: ProcessFormComponent},
	{path: "completed", component: ProcessFinishedComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProcessFormComponent,
		ProcessListComponent,
		ProcessFinishedComponent,
		StageFormComponent,
		StageCardComponent
	],
	imports: [
		RouterModule.forRoot(routes),
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
