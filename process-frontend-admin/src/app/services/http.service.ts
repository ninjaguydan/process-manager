import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IStage} from "../interfaces/IStage";
import {IProcess} from "../interfaces/IProcess";

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private httpClient: HttpClient) {
	}

	//-------------------- STAGES --------------------
	CREATE_STAGE(stage:IStage) {
		return this.httpClient.post('http://localhost:8080/stages',{
		})
	}
	//-------------------- PROCESSES --------------------
	CREATE_PROCESS(process:IProcess) {
		return this.httpClient.post('http://localhost:8080/processes',{...process})
	}
}
