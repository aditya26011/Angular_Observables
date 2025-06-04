import { Component, OnInit } from '@angular/core';
import { TaskServices } from '../Services/task.services';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit{
  tasks: string[] = ['task 1', 'task 2', 'task 3']

  constructor(private serviceTask:TaskServices){}

  ngOnInit(){
    this.serviceTask.CreateTask.subscribe((val)=>{
      this.tasks.push(val)
    })
  }

}