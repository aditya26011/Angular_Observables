import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
 providedIn: 'root'    
})
export class TaskServices{

CreateTask:EventEmitter<string>=new EventEmitter<string>();

onCreateTask(val:string){
    console.log(val)
 this.CreateTask.emit(val);
}

}