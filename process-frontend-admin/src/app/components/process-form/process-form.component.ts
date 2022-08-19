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

	process!:IProcess
	isEditing:boolean = false
	error:boolean = false
	stageError:boolean = false
	stageToDeleteList:IStage[] = []
	stageFormList: IStage[] = []

	constructor(private httpService:HttpService, private dataService:DataService, public toastService:ToastService) {
		this.process = this.setProcess()
		if ( dataService.processToEdit ) {
			this.isEditing = true
			this.process = this.setProcess()
		}
	}

	ngOnInit(): void {
	}


	onProcessSave(){
		if ( this.checkForError() ) { return }
		if (this.isEditing) {
			this.httpService.EDIT_PROCESS(this.process, this.stageToDeleteList).pipe(first()).subscribe({
				next: () => {
					this.toastService.show("Process Updated!","See 'View All' to see Processes", {delay: 5000, className: "dt-success"})
					this.onCancel()
				},
				error: () => console.error("SHIT WENT WRONG")
			})
		} else {
			this.httpService.CREATE_PROCESS(this.process).pipe(first()).subscribe({
				next: () => {
					this.toastService.show("Process Created!","See 'View All' to see Processes", {delay: 5000, className: "dt-success"})
					this.onCancel()
				},
				error: () => console.error("SHIT WENT WRONG")
			})
		}
	}

	addStage(stage: IStage) {
		let existingStage = this.process.stages.find((s) => s.id === stage.id)
		if ( !existingStage ) {
			this.process.stages.push(stage)
		} else {
			this.process.stages.map((s) => {
				if ( s.id === stage.id ) {
					return stage
				} else {
					return s
				}
			})
		}
	}
	removeStage(stageToDelete:IStage) {
		this.stageToDeleteList.push(stageToDelete)
		console.log(this.stageToDeleteList)
		this.process.stages = this.process.stages.filter((stage) => stage !== stageToDelete)
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
		this.isEditing = false
		this.dataService.SET_PROCESS_EDIT()
		this.stageFormList = []
		this.stageToDeleteList = []
		this.process = this.setProcess()
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
				title: this.dataService.processToEdit!.title,
				directions: this.dataService.processToEdit!.directions,
				isCompleted: false,
				stages: this.dataService.processToEdit!.stages
			}
		} else {
			return {
				id: 0,
				title: "",
				directions: "",
				isCompleted: false,
				stages: []
			}
		}
	}
	checkForError():boolean{
		if (this.process.title === "") {
			this.error = true
			return true
		} else if ( this.process.stages.length === 0) {
			this.error = false
			this.stageError = true
			return true
		}
		this.stageError = false
		return false
	}
	sortStages(direction:{direction:string, index:number}){
		console.log(direction)
		for (let i = 0; i < this.process.stages.length; i++) {
			if ( i === direction.index ) {
				let temp = this.process.stages[i]
				if ( direction.direction === "up" && direction.index !== 0 ) {
					this.process.stages[i] = this.process.stages[i-1]
					this.process.stages[i-1] = temp
				} else if (direction.direction === "down" && direction.index !== this.process.stages.length-1) {
					this.process.stages[i] = this.process.stages[i+1]
					this.process.stages[i+1] = temp
				}
			}
		}
	}
}