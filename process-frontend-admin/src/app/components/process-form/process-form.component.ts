import {Component, OnInit} from '@angular/core';
import {IStage} from "../../interfaces/IStage";
import {extractComponentStyleUrls} from "@angular/compiler-cli/src/ngtsc/annotations/component/src/resources";
import {HttpService} from "../../services/http.service";
import {first} from "rxjs";
import {IProcess} from "../../interfaces/IProcess";
import {bottom} from "@popperjs/core";

@Component({
	selector: 'app-process-form',
	templateUrl: './process-form.component.html',
	styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {

	error:boolean = false
	stageError:boolean = false
	title: string = ""
	directions: string = ""
	tempSavedStageList: IStage[] = []
	stageFormList: IStage[] = []
	stageList: IStage[] = []

	constructor(private httpService:HttpService) {

	}

	ngOnInit(): void {
	}
	onProcessSave(){
		if ( this.checkForError() ) { return }
		let process = this.setProcess()
		this.httpService.CREATE_PROCESS(process).pipe(first()).subscribe({
			next: () => {
				this.onCancel()
			},
			error: () => console.error("SHIT WENT WRONG")
		})
	}

	setStageList() {
		this.stageList = [
			...this.tempSavedStageList
		]
	}

	addTempStage(stage: IStage) {
		let existingStage = this.tempSavedStageList.find((s) => s.id === stage.id)
		if ( !existingStage ) {
			this.tempSavedStageList.push(stage)
		} else {
			this.tempSavedStageList.map((s) => {
				if ( s.id === stage.id ) {
					return stage
				} else {
					return s
				}
			})
		}
		this.setStageList()
	}

	removeTempStage(id: number) {
		this.tempSavedStageList = this.tempSavedStageList.filter((stage) => stage.id !== id)
		this.setStageList()
	}

	editTempStage(stage: IStage) {
		this.stageFormList = [stage]
	}

	addStage(): void {
		this.stageFormList = [
			...this.stageFormList,
			this.setEmptyStage()
		]
	}

	removeStage(index: number): void {
		this.stageFormList.splice(index, 1)
	}

	onCancel(): void {
		this.title = ""
		this.directions = ""
		this.tempSavedStageList = []
		this.stageFormList = []
		this.stageList = []
	}

	setEmptyStage(): IStage {
		return {
			id: new Date().getTime(),
			prompt: "",
			responseType: "Text",
			options: [
				{id: 0, content: ''},
				{id: 0, content: ''},
			]
		}
	}
	setProcess():IProcess{
		return {
			id: 0,
			title: this.title,
			directions: this.directions,
			isCompleted: false,
			stages: this.tempSavedStageList
		}
	}
	checkForError():boolean{
		if (this.title === "") {
			this.error = true
			return true
		} else if ( this.stageList.length === 0) {
			this.error = false
			this.stageError = true
			return true
		}
		this.stageError = false
		return false
	}

}