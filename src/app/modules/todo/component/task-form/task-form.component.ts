import { Observable, of, Subscription } from 'rxjs';
import { TaskLocalService } from './../../services/task-local.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  routerSubscription: Subscription;

  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  get subject(): FormControl {
    return this.form.get('subject') as FormControl;
  }

  get level(): FormControl {
    return this.form.get('level') as FormControl;
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private taskLocalService: TaskLocalService) { }

  ngOnInit(): void {


    // this.form = new FormGroup({
    //   subject: new FormControl(),
    //   state: new FormControl(0),
    //   level: new FormControl()
    // });

    this.form = this.fb.group({
      id: this.fb.control(null),
      subject: this.fb.control(null, [Validators.required], [this.shouldBeUnique.bind(this)]),
      state: this.fb.control(0),
      level: this.fb.control(null, [Validators.required]),
      tags: this.fb.array([], [this.arrayCannotEmpty()])
      // tags: this.fb.array([], [this.arrayCannotEmpty])
    });


    this.routerSubscription = this.route.paramMap
      .pipe(
        map((param) => +param.get('id')),
        filter((id) => !!id),
        switchMap((id) => this.taskLocalService.get(id)),
        tap(() => this.tags.clear()),
        tap((task) => this.onAddTag(task.data.tags.length))
      )
      .subscribe((task) => this.form.patchValue(task.data));



    // const id = parseInt(this.route.snapshot.paramMap.get('id'));

    // console.log('task id = ', id);
    // console.log('task id = ', !!id);


    // if (!!id) {
    //   this.taskLocalService.get(id)
    //     .pipe(
    //       tap(() => this.tags.clear),
    //       tap((task) => this.onAddTag(task.data.tags.length))
    //     )
    //     .subscribe((task) => {
    //       console.log('task', task.data);
    //       this.form.patchValue(task.data);
    //       console.log(this.form.value);
    //     });
    // }





  }


  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.routerSubscription.unsubscribe();
  }

  arrayCannotEmpty(): ValidatorFn {
    return (control: FormArray) => {
      // console.log('arrayCannotEmpty', control);
      if (control.length === 0) {
        return { cannotEmpty: true };
      }
      return null;
    };
  }


  // arrayCannotEmpty(control: FormArray): ValidationErrors {
  //   console.log('arrayCannotEmpty',control);
  //   if (control.length === 0) {
  //     return { cannotEmpty: true };
  //   }
  //   return null;
  // }


  shouldBeUnique(control: FormControl): Observable<ValidationErrors> {

    // console.log(this.taskLocalService);

    if (control.value) {


      return this.taskLocalService.ifExists(control.value).pipe(map((isExists) => { return isExists ? { shouldBeUnique: true } : null; }));


      // console.log(isExists);

      // isExists.then((value) => {
      //   console.log('isExists.then', value.data);

      //   if (value.data === 1) {
      //     console.log(of({ shouldBeUnique: true }));
      //     return of({ shouldBeUnique: true });
      //   }

      // });


    }

    return of(null);

  }


  onAddTag(count: number): void {
    console.log(this.tags, this.tags.value);

    // const tag = this.fb.group({
    //   tag: this.fb.control(null)
    // });

    for (let i = 0; i < count; i++) {
      const tag = this.fb.control(null);
      this.tags.push(tag);
    }
  }

  onDeleteTag(index: number): void {
    this.tags.removeAt(index);
  }

  onSave(): void {

    this.taskLocalService.add(this.form.value).subscribe((result) => {
      console.log(result);
    });
  }

  onNext(): void {
    this.router.navigate(['/todo/task', this.id.value + 1]);
  }



}
