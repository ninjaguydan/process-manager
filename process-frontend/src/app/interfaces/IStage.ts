import {IOption} from "./IOption";

export interface IStage {
	id:number
	place:number
	prompt:string
	responseType:string
	responseInput:string
	options:IOption[]
}