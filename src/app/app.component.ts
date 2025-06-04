import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
title = 'angularObservables';

data:any[]=[];


@ViewChild('createElem')
createbtn!:ElementRef
createBtnObs;

  array1=[1,2,3,4,5]
  array2=['A','B','C','D']

  //1. CREATE AN Observable
  // this is an obervables
  // myObservable=new Observable((observer)=>{
  //  setTimeout(()=>{observer.next(1)},1000) ;
  //  setTimeout(()=>{observer.next(2)},2000) ;
  //  setTimeout(()=>{observer.next(3)},3000) ;
  //     // setTimeout(()=>{observer.error(new Error('Something went wrong please check after some time.'))},3000) ;
  //  setTimeout(()=>{observer.next(4)},4000) ;
  //  setTimeout(()=>{observer.next(5)},5000) ;
  //    setTimeout(()=>{
  //     observer.complete()
  //   },6000)

  // })

  // myObservable=of(this.array1,this.array2,30,45);

  myObservable=from([2,4,5,6,7,8]);

  transformedObs=this.myObservable.pipe(map((val)=>{
    return val*5;
  }),filter((val)=>{
    return val%4===0;
  }))

  filteredObs=this.transformedObs.pipe(filter((val)=>{
    return val%4===0;
  }))

  onAsynData(){
    //2. This is Observer
    // takes 3 callback fun next, error, complete
//   this.myObservable.subscribe((val:any)=>{
//     this.data.push(val);
//   },(err)=>{
//     alert(err.message)
//   },()=>{
//     alert("All the data is streamed")
//   });
// }



this.filteredObs.subscribe({
  next:(val:any)=>{
    this.data.push(val);
    console.log(val);
  },//this will now point to app component
  error(err){
    alert(err.message)
  },
  complete(){
alert("All the data is streamed")  
}
})
  
}

// createBtnClicked(){
//     this.createBtnObs=fromEvent(this.createbtn.nativeElement,'click')
//                        .subscribe((data)=>{
//                         console.log(data)
//                         this.showDiv()
//                        }) 
// }
ngAfterViewInit(){
  // this.createBtnClicked();
}
// showDiv(){
//   let div=document.createElement('div');
//   div.innerText='Item';
//   document.getElementById('container').appendChild(div);
// }
}


