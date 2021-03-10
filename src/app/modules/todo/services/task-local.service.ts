import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { TaskState } from '../enum/task-state.enum';
import { Task } from '../models/task';
import { ResponseModel } from '../../../shared/model/response-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskLocalService {

  private tasks: Task[];


  constructor(private apiSerivce: ApiService) {



    // this.tasks = [
    //   new Task(1, 'task 1111111111111111'),
    //   new Task(2, 'task 2', TaskState.Doing),
    //   new Task(3, 'task 3', TaskState.Finish),
    // ];

    // this.tasks[0].level = 'XS';
    // this.tasks[0].tags = ['FEATURE', 'ISSUE', 'enhancement', 'discussion'];


    // this.tasks[1].level = 'S';
    // this.tasks[1].tags = ['Feature', 'Issue', 'document'];
    // this.tasks[1].expectDate = new Date(2021, 3, 10);

    // this.tasks[2].level = 'M';
    // this.tasks[2].tags = ['feature', 'issue'];
    // this.tasks[2].expectDate = new Date(2021, 3, 20);
    // this.tasks[2].finishedDate = new Date(2021, 3, 20);


  }


  getData(): Task[] {
    return this.tasks;
  }


  getTodoTask(para: { [param: string]: any; }): Observable<ResponseModel<Task[]>> {
    // :Observable<ResponseModel>
    // let data;

    // this.apiSerivce.get(environment.apiUrl + '/api/Todo/Get').subscribe(result => {
    //   data = result.data;

    //   console.log(result);
    // });

    // const para = { subject, state };

    return this.apiSerivce.get(environment.apiUrl + '/api/Todo/Get', para);

  }


  add(task: Task): Observable<any> {
    // task.id=this. Observable<any>
    console.log(task);

    return this.apiSerivce.post(environment.apiUrl + '/api/Todo/Add', task);
  }

  ifExists(subject: string): Observable<boolean> {
    const para = { subject };

    return this.apiSerivce.post(environment.apiUrl + '/api/Todo/SubjectExists', para).pipe(map((task) => {
      console.log(task);
      return task.data === 1
    }));

  }


}
