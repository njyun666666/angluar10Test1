import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit(): void {
    console.log("TaskListComponent - ngOnInit");
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('TaskListComponent - ngOnChanges', changes);
  }

}
