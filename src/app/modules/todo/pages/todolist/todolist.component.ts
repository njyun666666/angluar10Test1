import { Component, OnInit } from '@angular/core';
import { TaskState } from '../../enum/task-state.enum';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  // task: Task;
  tasks: Task[];
  selectedTask: Task;

  constructor() { }

  ngOnInit(): void {

    // this.task = new Task('show todo title (from TodolistComponent)', TaskState.Doing);
    this.onLoad();
    // this.onSelectTask(0);

  }

  onLoad() {
    this.tasks = [
      new Task("task 1111111111111111"),
      new Task("task 2", TaskState.Doing),
      new Task("task 3", TaskState.Finish),
    ];

    this.tasks[0].level = "XS";
    this.tasks[0].tags = ["FEATURE", "ISSUE", "enhancement", "discussion"];


    this.tasks[1].level = "S";
    this.tasks[1].tags = ["Feature", "Issue", "document"];
    this.tasks[1].expectDate = new Date(2021, 3, 10);

    this.tasks[2].level = "M";
    this.tasks[2].tags = ["feature", "issue"];
    this.tasks[2].expectDate = new Date(2021, 3, 20);
    this.tasks[2].finishedDate = new Date(2021, 3, 20);


  }

  onClear() {
    this.tasks = [];
  }




  onSelectTask(index: number): void {
    this.selectedTask = this.tasks[index];
  }

  onStateChanges(state: TaskState): void {
    this.selectedTask.state = state;
    console.log('todolist: onStateChanges: ' + state);
  }

  get completeRate(): number {
    const completeCount = this.tasks.filter((task) =>
      task.state === TaskState.Finish
    ).length;

    console.log('completeCount: ' + completeCount);
    return completeCount / this.tasks.length || 0;
  }



}
