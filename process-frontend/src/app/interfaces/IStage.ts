import {IOption} from "./IOption";

export interface IStage {
	id:number
	prompt:string
	responseType:string
	options:IOption[]
}