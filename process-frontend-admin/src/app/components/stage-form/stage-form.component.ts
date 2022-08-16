import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-stage-form',
	templateUrl: './stage-form.component.html',
	styleUrls: ['./stage-form.component.css']
})
export class StageFormComponent implements OnInit {

	@Input() INDEX!: number
	@Input() STAGE!:any
	@Output() ON_REMOVE = new EventEmitter
	@Output() ON_SAVE = new EventEmitter

	constructor() {

	}
	ngOnInit(): void {
	}
	setType(value: string) {
		this.STAGE.type = value
	}
	onCancel(){
		// this.responseObject = this.setEmptyResponse()
		this.ON_REMOVE.emit(this.INDEX)
	}

}
