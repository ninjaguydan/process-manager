import {IOption} from "./IOption";

export interface IStage {
	id:number
	prompt:string
	type:string
	options:IOption[]
}