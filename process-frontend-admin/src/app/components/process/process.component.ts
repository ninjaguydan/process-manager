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
	truncated: boolean = true
	@Input() PROCESS!: IProcess
	@Output() ON_CHANGE = new EventEmitter

	constructor(private httpService: HttpService, private dataService:DataService, private router:Router, public toastService:ToastService) {
	}

	ngOnInit(): void {
	}

	expandInfo() {
		this.truncated = !this.truncated
	}

	deleteProcess() {
		this.httpService.DELETE_PROCESS(this.PROCESS.id).pipe(first()).subscribe({
			next: () => {
				this.toastService.show("Process Deleted!","", {delay: 5000, className: "dt-danger"})
				this.ON_CHANGE.emit()
			},
			error: err => console.error(err)
		})
	}

	editProcess() {
		this.dataService.SET_PROCESS_EDIT(this.PROCESS)
		this.router.navigate(["new"]).then()

	}


}
