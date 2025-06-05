import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
ngOnInit(){
let myObs=new Observable((observer)=>{observer.next(Math.random())});

//subscriber 1
myObs.subscribe((data)=>{
  console.log(data)
})

//subscriber 2
myObs.subscribe((data)=>{
  console.log(data)
})
}
}
