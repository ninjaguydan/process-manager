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
  @Output() ON_STAGE_DELETE = new EventEmitter
  @Output() ON_STAGE_EDIT = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(){
    this.ON_STAGE_DELETE.emit(this.STAGE.id)
  }
  onEdit(){
    this.ON_STAGE_EDIT.emit(this.STAGE)
  }

}
