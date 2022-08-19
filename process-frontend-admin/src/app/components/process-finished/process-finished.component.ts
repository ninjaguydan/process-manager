import {Component, Input, OnInit} from '@angular/core';
import {IProcess} from "../../interfaces/IProcess";

@Component({
	selector: 'app-process-finished',
	templateUrl: './process-finished.component.html',
	styleUrls: ['./process-finished.component.css']
})
export class ProcessFinishedComponent implements OnInit {
	truncated: boolean = true
	@Input() PROCESS!: IProcess

	constructor() {
	}

	expandInfo() {
		this.truncated = !this.truncated
	}

	ngOnInit(): void {
	}

}
