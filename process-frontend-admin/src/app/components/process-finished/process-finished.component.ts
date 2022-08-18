import { Component, OnInit } from '@angular/core';
import {IProcess} from "../../interfaces/IProcess";
import {HttpService} from "../../services/http.service";
import {first} from "rxjs";

@Component({
  selector: 'app-finished-list',
  templateUrl: './process-finished.component.html',
  styleUrls: ['./process-finished.component.css']
})
export class ProcessFinishedComponent implements OnInit {

  processList: IProcess[] = []

  constructor(private httpService: HttpService) {
    this.setProcessList()
  }

  ngOnInit(): void {
  }
  setProcessList(){
    this.httpService.GET_PROCESSES().pipe(first()).subscribe({
      next: value => this.processList = value.filter((process) => process.isCompleted),
      error: err => console.error(err)
    })
  }
}
