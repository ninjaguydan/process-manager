import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStage} from "../../interfaces/IStage";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input() stage!:IStage
  @Input() INDEX!:number
  @Input() STEP!:number


  constructor() { }

  ngOnInit(): void {
  }
  onChange(response:string){
    this.stage.responseInput = response
  }

}
