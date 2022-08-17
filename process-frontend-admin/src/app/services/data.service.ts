import {Injectable} from '@angular/core';
import {IProcess} from "../interfaces/IProcess";

@Injectable({
	providedIn: 'root'
})
export class DataService {

	processToEdit:IProcess|null = null

	constructor() {
	}

	SET_PROCESS_EDIT(process:IProcess|null = null){
		this.processToEdit = process
	}

}
