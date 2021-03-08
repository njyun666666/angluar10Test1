import { CounterService } from './../../../../shared/services/counter.service';
import { Observable } from 'rxjs';
import { TaskLocalService } from './../../services/task-local.service';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Task } from '../../models/task';
import { ResponseModel } from '../../../../shared/model/response-model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges { // , DoCheck

  // subject: string;

  @ViewChild('subject') subject: NgModel;


  // @Input() tasks: Task[];
  a = 'text from TaskListComponent';




  // tasks: Task[];
  taskList$: ResponseModel<Task[]>;

  constructor(private taskService: TaskLocalService, public counterService: CounterService) { }

  ngOnInit(): void {
    // console.log('TaskListComponent - ngOnInit');
    // console.log(this.tasks);

    // this.taskList$ = this.taskService.getTodoTask();

    this.taskService.getTodoTask().subscribe((result) => {
      // console.log('getTodoTask().subscribe');

      // this.tasks = result.data;
      this.taskList$ = result;
      // this.taskList.data.
      console.log(this.taskList$);

    });


  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log('TaskListComponent - ngOnChanges', changes);
  }

  // ngDoCheck(): void {
  //   console.log("TaskListComponent - ngDoCheck", this.tasks.length);
  // }


  onSearch(subject: NgModel) {

    console.log(subject);

    this.taskService.getTodoTask(subject.value).subscribe((result) => {
      this.taskList$ = result;
      console.log(this.taskList$);
    });
  }






}
