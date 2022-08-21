import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStage} from "../../interfaces/IStage";

@Component({
	selector: 'app-stage-form',
	templateUrl: './stage-form.component.html',
	styleUrls: ['./stage-form.component.css']
})
export class StageFormComponent implements OnInit {

	@Input() INDEX!: number
	@Input() STAGE!:IStage
	@Output() ON_REMOVE = new EventEmitter
	@Output() ON_SAVE = new EventEmitter
	error:boolean = false
	optionError:boolean = false


	constructor() {

	}
	ngOnInit(): void {
	}
	onSave():void{
		if ( this.errorCheck() ) {return}
		this.ON_SAVE.emit(this.STAGE)
		this.onCancel()
	}
	onCancel():void{
		this.ON_REMOVE.emit(this.INDEX)
	}
	setType(value: string):void {
		this.STAGE.responseType = value
	}
	addOption():void{
		if ( this.STAGE.options.length < 4 ) {
			this.STAGE.options = [
				...this.STAGE.options,
				{id:0, content:''}
			]
		}
	}
	errorCheck():boolean{
		if ( this.STAGE.prompt === "" ) {
			this.error = true
			return true
		} else if ( this.STAGE.responseType === "Multiple"
			&& (this.STAGE.options[0].content === "" && this.STAGE.options[1].content === "")) {
			this.error = false
			this.optionError = true
			return true
		}
		this.optionError = false
		return false
	}

}
