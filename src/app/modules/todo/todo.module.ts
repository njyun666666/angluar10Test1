import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TaskComponent } from './component/task/task.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { TaskStateColorDirective } from './directive/task-state-color.directive';
import { TaskListComponent } from './component/task-list/task-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TaskComponent, TodolistComponent, TaskStateColorDirective, TaskListComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule,
    UiModule
  ],
  exports: [TaskListComponent]
})
export class TodoModule { }
