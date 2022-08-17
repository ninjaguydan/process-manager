import {Component, OnInit} from '@angular/core';
import {IStage} from "../../interfaces/IStage";
import {extractComponentStyleUrls} from "@angular/compiler-cli/src/ngtsc/annotations/component/src/resources";

@Component({
	selector: 'app-process-form',
	templateUrl: './process-form.component.html',
	styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {

	title: string = ""
	directions: string = ""
	tempSavedStageList: IStage[] = []
	stageFormList: IStage[] = []
	stageList: IStage[] = []

	constructor() {

	}

	ngOnInit(): void {
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
		this.stageFormList = []
	}

	setEmptyStage(): IStage {
		return {
			id: new Date().getTime(),
			prompt: "",
			type: "Text",
			options: [
				{id: 0, content: ''},
				{id: 0, content: ''},
			]
		}
	}

}