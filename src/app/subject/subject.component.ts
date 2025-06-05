import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
ngOnInit(){
// let myObs=new Observable((observer)=>{observer.next(Math.random())});

const sub=new Subject();


//subscriber 1
sub.subscribe((data)=>{
  console.log(data)
})

//subscriber
sub.subscribe((data)=>{
  console.log(data)
})

sub.next(Math.random())

}
}
