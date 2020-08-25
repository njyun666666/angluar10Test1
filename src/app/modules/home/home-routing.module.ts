import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
    // path: '', component: FirstComponent, children: [
    //   { path: '', component: First2Component },
    //   { path: 'first', component: First2Component }
    // ]
    // , canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class HomeRoutingModule { }
