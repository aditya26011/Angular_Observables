import { Component } from '@angular/core';
import { TaskServices } from '../Services/task.services';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTask: string = '';

  constructor(private taskService:TaskServices){}
  onCreateTask(value:string){
    this.taskService.onCreateTask(value)
  }
}