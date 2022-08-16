import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {

  title:string = ""
  directions:string = ""
  stageList:any = []

  constructor() {

  }

  ngOnInit(): void {
  }

  addStage(){
    this.stageList = [
        ...this.stageList,
        this.setEmptyResponse()
    ]
  }
  removeStage(index:number){
    this.stageList.splice(index, 1)
  }
  onCancel(){
    this.title = ""
    this.directions = ""
    this.stageList = []
  }

  setEmptyResponse() {
    return  {
      prompt: "",
      type: "Text",
      options: {
        first: "",
        second: "",
        third: "",
        fourth: ""
      }
    }
  }

}