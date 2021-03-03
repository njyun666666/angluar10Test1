import { Component, OnInit } from '@angular/core';
import { TaskState } from '../../enum/task-state.enum';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  task: Task;
  tasks: Task[];
  selectedTask: Task;

  constructor() { }

  ngOnInit(): void {

    this.task = new Task('show todo title (from TodolistComponent)', TaskState.Doing);
    this.tasks = [
      new Task("頁面需要顯示待辦事項主旨"),
      new Task("可以設定待辦事項的狀態", TaskState.Doing),
      new Task("當待辦事項狀態為已完的事項無法編輯事項", TaskState.Finish),
    ];

    this.onSelectTask(1);

  }


  onSelectTask(index: number): void {
    this.selectedTask = this.tasks[index];
  }

  onStateChanges(state: TaskState): void {
    this.selectedTask.state = state;
    console.log('todolist: onStateChanges: ' + state);
  }

}
