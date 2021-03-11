import { TaskLocalService } from './task-local.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskResolveService implements Resolve<Task> {

  constructor(private taskLocalService: TaskLocalService) { }



  resolve(route: ActivatedRouteSnapshot): Observable<Task> | Promise<Task> | Task {
    const id = +route.paramMap.get('id');
    return this.taskLocalService.get(id);
  }




}
