import {Component, OnDestroy} from '@angular/core';
import {DataService} from "./services/data.service";
import {IProcess} from "./interfaces/IProcess";
import {Subscription} from "rxjs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

	startedProcess:IProcess|null = null
	processSUB:Subscription

	constructor(private dataService:DataService) {
		this.processSUB = dataService.process$.subscribe({
			next: value => this.startedProcess = value
		})
	}
	ngOnDestroy() {
		this.processSUB.unsubscribe()
	}
}
