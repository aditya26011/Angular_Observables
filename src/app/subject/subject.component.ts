import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
ngOnInit(){
// let myObs=new Observable((observer)=>{observer.next(Math.random())});

const sub=new BehaviorSubject<number>(100);


//subscriber 1
sub.subscribe((data)=>{
  console.log("subscriber 1 " + data)
})

//subscriber
sub.subscribe((data)=>{
  console.log("subscriber 2 " + data)
})

sub.next(200)

//subscriber 3
sub.subscribe((data)=>{
  console.log("subscriber 3 " + data)//last emitted will be 200 for this
})

// const subject=new Subject();
// const data=ajax('https://randomuser.me/api/');

// subject.subscribe((data)=>{console.log(data)})
// subject.subscribe((data)=>{console.log(data)})
// subject.subscribe((data)=>{console.log(data)})

// //subject consuming data
// data.subscribe(subject);

// }
}
}
