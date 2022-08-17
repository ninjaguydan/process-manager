import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IStage} from "../interfaces/IStage";
import {IProcess} from "../interfaces/IProcess";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private httpClient: HttpClient) {
	}

	//-------------------- STAGES --------------------
	GET_STAGES():Observable<IStage[]>{
		return this.httpClient.get<IStage[]>('http://localhost:8080/stages')
	}
	CREATE_STAGE(stage:IStage) {
		return this.httpClient.post('http://localhost:8080/stages',{
		})
	}
	DELETE_STAGE(stageId:number, processId:number){
		return this.httpClient.delete(`http://localhost:8080/stages/${stageId}/${processId}`)
	}
	//-------------------- PROCESSES --------------------
	GET_PROCESSES():Observable<IProcess[]>{
		return this.httpClient.get<IProcess[]>('http://localhost:8080/processes')
	}
	CREATE_PROCESS(process:IProcess) {
		return this.httpClient.post('http://localhost:8080/processes',{...process})
	}
	DELETE_PROCESS(processId:number){
		return this.httpClient.delete(`http://localhost:8080/processes/${processId}`)
	}
	EDIT_PROCESS(process:IProcess) {
		return this.httpClient.put('http://localhost:8080/processes', {...process})
	}
}
