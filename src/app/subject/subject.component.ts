import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
ngOnInit(){
// let myObs=new Observable((observer)=>{observer.next(Math.random())});

// const sub=new ReplaySubject(2);

// sub.next(100);
// sub.next(200);
// sub.next(300);
// //subscriber 1
// sub.subscribe((data)=>{
//   console.log("subscriber 1 " + data)
// })

// //subscriber
// sub.subscribe((data)=>{
//   console.log("subscriber 2 " + data)
// })

// sub.next(2020)

//subscriber 3
// sub.subscribe((data)=>{
//   console.log("subscriber 3 " + data)//last emitted will be 200 for this
// })

// sub.next(400);

// const subject=new Subject();
// const data=ajax('https://randomuser.me/api/');

// subject.subscribe((data)=>{console.log(data)})
// subject.subscribe((data)=>{console.log(data)})
// subject.subscribe((data)=>{console.log(data)})

// //subject consuming data
// data.subscribe(subject);

// }


//Async Subject
const asyncSub=new AsyncSubject();

asyncSub.next(200);
asyncSub.next(100);
asyncSub.next(300);

asyncSub.subscribe((data)=>console.log(data))

asyncSub.complete();

asyncSub.subscribe((data)=>console.log(data))

asyncSub.next(400);

}
}
