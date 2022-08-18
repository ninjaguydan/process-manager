import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {IProcess} from "../../interfaces/IProcess";
import {first} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
	selector: 'app-process-list',
	templateUrl: './process-list.component.html',
	styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {

	processList: IProcess[] = []

	constructor(private httpService: HttpService) {
		this.setProcessList()
	}

	ngOnInit(): void {
	}
	setProcessList(){
		this.httpService.GET_PROCESSES().pipe(first()).subscribe({
			next: value => this.processList = value,
			error: err => console.error(err)
		})
	}

}
