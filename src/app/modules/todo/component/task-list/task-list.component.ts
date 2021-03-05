import { TaskLocalService } from './../../services/task-local.service';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges { // , DoCheck

  // @Input() tasks: Task[];
  a = 'text from TaskListComponent';

  tasks: Task[];


  constructor(private taskService: TaskLocalService) { }

  ngOnInit(): void {
    console.log('TaskListComponent - ngOnInit');


    this.taskService.getTodoTask().subscribe((result) => { this.tasks = result.data; });


  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('TaskListComponent - ngOnChanges', changes);
  }

  // ngDoCheck(): void {
  //   console.log("TaskListComponent - ngDoCheck", this.tasks.length);
  // }

}
