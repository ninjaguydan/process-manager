import {IStage} from "./IStage";

export interface IProcess {
	id:number
	title:string
	directions:string
	isCompleted:boolean
	stages:IStage[]
	cleanUp?:IStage[]
}