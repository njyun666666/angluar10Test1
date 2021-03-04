import { TaskState } from '../enum/task-state.enum';

export class Task {

    constructor(
        public subject: string,
        public state: TaskState = TaskState.None
    ) { }

    level?: "XS" | "S" | "M" | "L" | "XL";
    tags?: string[];
    expectDate?: Date;
    finishedDate?: Date;


}
