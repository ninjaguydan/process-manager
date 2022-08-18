import {Component, Input, OnInit} from '@angular/core';
import {IProcess} from "../../interfaces/IProcess";

@Component({
  selector: 'app-process-start',
  templateUrl: './process-start.component.html',
  styleUrls: ['./process-start.component.css']
})
export class ProcessStartComponent implements OnInit {

  @Input() PROCESS!:IProcess

  constructor() { }

  ngOnInit(): void {
  }

}
