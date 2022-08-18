import {Injectable} from '@angular/core';
import {IProcess} from "../interfaces/IProcess";
import {Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DataService {

	processToStart:IProcess|null = null
	process$:Subject<IProcess|null> = new Subject()

	constructor() {
	}

	START_PROCESS(process:IProcess|null = null){
		this.processToStart = process
		this.process$.next(process)
	}

}
