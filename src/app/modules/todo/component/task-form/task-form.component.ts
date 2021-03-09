import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup;



  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   subject: new FormControl(),
    //   state: new FormControl(0),
    //   level: new FormControl()
    // });


    this.form = this.fb.group({
      subject: this.fb.control(null),
      state: this.fb.control(0),
      level: this.fb.control(null),
      tags: this.fb.array([])
    });


  }


  onAddTag(): void {
    console.log(this.tags, this.tags.value);

    const tag = this.fb.group({
      tag: this.fb.control(null)
    });
    this.tags.push(tag);
  }


}
