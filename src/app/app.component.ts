import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularObservables';

  data:any[]=[];

  //1. CREATE AN Observable
  // this is an obervable
  myObservable=new Observable((observer)=>{
    observer.next([1,2,3,4,5]);
  })

  onAsynData(){
    //2. This is Observer
    // takes 3 callback fun next, error, complete
  this.myObservable.subscribe((val:any)=>{
    this.data=val;
  })
  }
}
