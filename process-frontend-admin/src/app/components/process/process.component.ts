import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProcess} from "../../interfaces/IProcess";
import {IStage} from "../../interfaces/IStage";
import {HttpService} from "../../services/http.service";
import {first} from "rxjs";

@Component({
	selector: 'app-process',
	templateUrl: './process.component.html',
	styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
	truncated: boolean = true
	@Input() PROCESS!: IProcess
	@Output() ON_CHANGE = new EventEmitter

	constructor(private httpService: HttpService) {
	}

	ngOnInit(): void {
	}

	expandInfo() {
		this.truncated = !this.truncated
	}

	deleteProcess() {
		this.httpService.DELETE_PROCESS(this.PROCESS.id).pipe(first()).subscribe({
			next: () => this.ON_CHANGE.emit(),
			error: err => console.error(err)
		})
	}

	editProcess() {

	}


}
