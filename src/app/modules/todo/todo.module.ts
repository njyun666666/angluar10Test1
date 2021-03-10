import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TaskComponent } from './component/task/task.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { TaskStateColorDirective } from './directive/task-state-color.directive';
import { TaskListComponent } from './component/task-list/task-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { TodoaddComponent } from './pages/todoadd/todoadd.component';
import { TodonavComponent } from './component/todonav/todonav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TaskComponent, TodolistComponent, TaskStateColorDirective, TaskListComponent, TaskFormComponent, TodoaddComponent, TodonavComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule,
    UiModule,
    RouterModule
  ],
  exports: [TaskListComponent]
})
export class TodoModule { }
