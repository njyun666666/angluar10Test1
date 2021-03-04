import { TaskState } from './../enum/task-state.enum';
import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskStateColor]'
})
export class TaskStateColorDirective implements OnChanges {

  @Input("appTaskStateColor") state: TaskState;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnChanges(): void {

    this.clearElementClass();
    this.addClassByState();

  }


  private clearElementClass() {
    const classNames = ["none", "doing", "finish"];

    classNames.forEach((className) =>
      this.renderer.removeClass(this.elRef.nativeElement, className)
    );

  }

  private addClassByState() {

    let className: string;

    switch (this.state) {
      case TaskState.None:
        className = "none";
        break;
      case TaskState.Doing:
        className = "doing";
        break;
      case TaskState.Finish:
        className = "finish";
        break;
      default:
        break;
    }

    this.renderer.addClass(this.elRef.nativeElement, className);

  }



}
