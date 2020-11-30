import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './pages/test1/test1.component';

const routes: Routes = [
  { path: '', component: Test1Component, pathMatch: 'full' },
  { path: 'test1', component: Test1Component, pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TestRoutingModule { }
