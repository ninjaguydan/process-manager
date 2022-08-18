import {Component, OnInit} from '@angular/core';
import {IStage} from "../../interfaces/IStage";
import {HttpService} from "../../services/http.service";
import {first} from "rxjs";
import {IProcess} from "../../interfaces/IProcess";
import {DataService} from "../../services/data.service";
import {ToastService} from "../../services/toast.service";

@Component({
	selector: 'app-process-form',
	templateUrl: './process-form.component.html',
	styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {

	isEditing:boolean = false
	error:boolean = false
	stageError:boolean = false
	title: string = ""
	directions: string = ""
	stageList: IStage[] = []
	stageToDeleteList:IStage[] = []
	stageFormList: IStage[] = []


	constructor(private httpService:HttpService, private dataService:DataService, public toastService:ToastService) {
		if ( dataService.processToEdit ) {
			this.isEditing = true
			this.title = dataService.processToEdit.title
			this.directions = dataService.processToEdit.directions
			this.stageList = dataService.processToEdit.stages
		}
	}

	ngOnInit(): void {
	}


	onProcessSave(){
		if ( this.checkForError() ) { return }
		let process = this.setProcess()
		if (this.isEditing) {
			this.httpService.EDIT_PROCESS(process).pipe(first()).subscribe({
				next: () => {
					this.toastService.show("Process Updated!","See 'View All' to see Processes", {delay: 5000, className: "dt-success"})
					this.handleDelete()
					this.onCancel()
				},
				error: () => console.error("EDIT WENT WRONG")
			})
		} else {
			this.httpService.CREATE_PROCESS(process).pipe(first()).subscribe({
				next: () => {
					this.toastService.show("Process Created!","See 'View All' to see Processes", {delay: 5000, className: "dt-success"})
					this.handleDelete()
					this.onCancel()
				},
				error: () => console.error("SHIT WENT WRONG")
			})
		}
	}

	addStage(stage: IStage) {
		let existingStage = this.stageList.find((s) => s.id === stage.id)
		if ( !existingStage ) {
			this.stageList.push(stage)
		} else {
			this.stageList.map((s) => {
				if ( s.id === stage.id ) {
					return stage
				} else {
					return s
				}
			})
		}
	}
	removeStage(id: number) {
		let stageToDelete = this.stageList.find((stage) => stage.id === id)!
		this.stageToDeleteList.push(stageToDelete)
		this.stageList = this.stageList.filter((stage) => stage.id !== id)
	}
	editStage(stage: IStage) {
		this.stageFormList = [stage]
	}

	addStageForm(): void {
		this.stageFormList = [
			...this.stageFormList,
			this.setEmptyStage()
		]
	}
	removeStageForm(index: number): void {
		this.stageFormList.splice(index, 1)
	}

	onCancel(): void {
		this.title = ""
		this.directions = ""
		this.stageFormList = []
		this.stageList = []
		this.dataService.SET_PROCESS_EDIT()
		this.isEditing = false
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
		if ( this.isEditing ) {
			return {
				id: this.dataService.processToEdit!.id,
				title: this.title,
				directions: this.directions,
				isCompleted: false,
				stages: [
					...this.stageList,
				]
			}
		} else {
			return {
				id: 0,
				title: this.title,
				directions: this.directions,
				isCompleted: false,
				stages: this.stageList
			}
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
	handleDelete(){
		for (let stage of this.stageToDeleteList) {
			this.httpService.DELETE_STAGE(stage.id, this.dataService.processToEdit?.id!).pipe(first()).subscribe()
		}
		this.stageToDeleteList = []
	}

}