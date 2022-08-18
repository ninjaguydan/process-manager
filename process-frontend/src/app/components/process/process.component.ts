import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProcess} from "../../interfaces/IProcess";
import {HttpService} from "../../services/http.service";
import {first} from "rxjs";
import {DataService} from "../../services/data.service";
import { Router } from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
	selector: 'app-process',
	templateUrl: './process.component.html',
	styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

	@Input() PROCESS!: IProcess

	constructor(private dataService:DataService) {
	}

	ngOnInit(): void {
	}
	startProcess(){
		this.dataService.START_PROCESS(this.PROCESS)
	}


}
