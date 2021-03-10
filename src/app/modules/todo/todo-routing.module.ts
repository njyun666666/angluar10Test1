import { TodoaddComponent } from './pages/todoadd/todoadd.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodotaskComponent } from './pages/todotask/todotask.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'add', component: TodoaddComponent },
  { path: 'task', component: TodotaskComponent },
  { path: 'task/:id', component: TodotaskComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
