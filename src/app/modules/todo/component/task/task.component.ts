import { Task } from './../../models/task';
import { TaskState } from './../../enum/task-state.enum';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { stat } from 'fs';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnChanges {

  task: Task;
  TaskState = TaskState;
  stateDesc: string;



  @Input() in_subject: string;
  // @Input() in_state: TaskState;

  private _state: TaskState;

  @Input()
  set in_state(state: TaskState) {
    console.log('input: ' + state);

    this._state = state;
    this.stateDesc = this.getStateDesc();
  }


  get in_state(): TaskState {
    return this._state;
  }


  @Output() out_stateChange = new EventEmitter<TaskState>();



  @Input() state: TaskState;
  @Output() stateChange = new EventEmitter<TaskState>();






  constructor() { }

  ngOnInit(): void {
    this.task = new Task("task title");


    console.log('ngOnInit :');
    console.log(this.state);
    // this.state = TaskState.Finish;
    // this.stateChange.emit(this.state);

    // console.log('in_subject: ' + this.in_subject);
    // console.log('in_state: ' + this.in_state);
  }

  ngOnChanges(): void {
    this.stateDesc = this.getStateDesc();
    console.log('ngOnChanges stateDesc: ' + this.stateDesc);
  }


  getStateDesc(): string {
    switch (this._state) {
      case TaskState.None:
        return "none";
      case TaskState.Doing:
        return "Doing";
      case TaskState.Finish:
        return "Finish";
      default:
        return "error";
    }
  }


  onSetTaskState(state: TaskState): void {
    // this._state = state;
    console.log('task onSetTaskState');
    this.stateChange.emit(state);
    // this.out_stateChange.emit(state);
  }


  getStateColor(): string {
    switch (this._state) {
      case TaskState.Doing:
        return "green";
      case TaskState.Finish:
        return "blue";
      default:
        break;
    }
  }



}
