import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private httpClient: HttpClient) {
	}

	//-------------------- STAGES --------------------
	CREATE_STAGE() {
		this.httpClient.post('http://localhost:8080/stages',{})
	}
}
