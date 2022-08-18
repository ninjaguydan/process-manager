import {Injectable} from '@angular/core';
import {IToast} from "../interfaces/IToast";

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	toasts: IToast[] = []

	constructor() {
	}

	show(header: string, body: string, options: any = {}) {
		this.toasts.push({header, body, ...options})
	}
	remove(toast:IToast){
		this.toasts = this.toasts.filter((t) => t !== toast)
	}
	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
