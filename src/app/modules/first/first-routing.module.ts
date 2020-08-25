
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { First2Component } from './pages/first2/first2.component';


const routes: Routes = [
  { path: '', component: FirstComponent, pathMatch: 'full' },
  { path: 'first', component: FirstComponent, pathMatch: 'full' },
  { path: 'first2', component: First2Component, pathMatch: 'full' },

  // , canActivate: [AuthGuard]

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FirstRoutingModule { }
