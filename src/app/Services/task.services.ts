import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
 providedIn: 'root'    
})
export class TaskServices{

// CreateTask:EventEmitter<string>=new EventEmitter<string>();
 
CreateTask=new Subject<string>();

onCreateTask(val:string){
    console.log(val)
 this.CreateTask.next(val);
}

}