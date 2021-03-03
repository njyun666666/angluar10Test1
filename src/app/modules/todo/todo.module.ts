import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TaskComponent } from './component/task/task.component';
import { TodolistComponent } from './pages/todolist/todolist.component';


@NgModule({
  declarations: [TaskComponent, TodolistComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
