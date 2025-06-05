import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
ngOnInit(){
// let myObs=new Observable((observer)=>{observer.next(Math.random())});

// const sub=new Subject();


// //subscriber 1
// sub.subscribe((data)=>{
//   console.log(data)
// })

// //subscriber
// sub.subscribe((data)=>{
//   console.log(data)
// })

// sub.next(Math.random())

const subject=new Subject();
const data=ajax('https://randomuser.me/api/');

subject.subscribe((data)=>{console.log(data)})
subject.subscribe((data)=>{console.log(data)})
subject.subscribe((data)=>{console.log(data)})

//subject consuming data
data.subscribe(subject);

}
}
