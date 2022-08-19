import {Component, Input, OnInit} from '@angular/core';
import {IProcess} from "../../interfaces/IProcess";
import {DataService} from "../../services/data.service";
import {ToastService} from "../../services/toast.service";
import {HttpService} from "../../services/http.service";
import {filter, first} from "rxjs";

@Component({
	selector: 'app-process-start',
	templateUrl: './process-start.component.html',
	styleUrls: ['./process-start.component.css']
})
export class ProcessStartComponent implements OnInit {

	@Input() PROCESS!: IProcess
	step: number = 0

	constructor(private dataService:DataService, public toastService:ToastService, private httpService:HttpService) {
	}

	ngOnInit(): void {
	}

	onNext() {
		console.log(this.PROCESS.stages[this.step].responseInput)
		if (this.PROCESS.stages[this.step].responseInput !== "" && this.step < this.PROCESS.stages.length-1) {
			this.step++
		} else if (this.step === this.PROCESS.stages.length-1) {
			this.httpService.EDIT_PROCESS(this.PROCESS).pipe(first()).subscribe({
				next: () => {
					this.dataService.START_PROCESS()
					this.toastService.show("Process Completed!", "Why not try another one?", {className:"dt-success"})
				}
			})
		}
	}
	omCancel(){
		this.dataService.START_PROCESS()
	}

}
