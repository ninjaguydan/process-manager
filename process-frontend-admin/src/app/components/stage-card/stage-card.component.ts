import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStage} from "../../interfaces/IStage";

@Component({
  selector: 'app-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.css']
})
export class StageCardComponent implements OnInit {
  @Input() STAGE!:IStage
  @Input() INDEX!:number
  @Input() EDIT_VIEW:boolean = true
  @Output() ON_STAGE_DELETE = new EventEmitter
  @Output() ON_STAGE_EDIT = new EventEmitter
  @Output() ON_ORDER_CHANGE = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(){
    this.ON_STAGE_DELETE.emit(this.STAGE)
  }
  onEdit(){
    this.ON_STAGE_EDIT.emit(this.STAGE)
  }
  onOrder(direction:string){
    this.ON_ORDER_CHANGE.emit({direction, index:this.INDEX})
  }

}
