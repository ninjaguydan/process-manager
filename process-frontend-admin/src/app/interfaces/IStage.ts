import {IOption} from "./IOption";

export interface IStage {
	id:number
	prompt:string
	responseType:string
	responseInput?:string
	options:IOption[]
}