import { Injectable } from '@angular/core';
import{BehaviorSubject, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  luggageNumber=new BehaviorSubject<any>([]);
  nrluggageBooked=new BehaviorSubject<any>([]);//


showCode=new Subject()//pt get code


  show:boolean=true;
  getToggle(luggage:any){
    luggage.show=!luggage.show

  }
luggages:any[]=[{
  place:32,code:"TREWE",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:33,code:"MNHGY",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:34,code:"UJHGI",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:35,code:"UJNBS",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:36,code:"OINFK",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:37,code:"MNBGL",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:38,code:"ICFDX",name:'Available',price:5,hours:1,name1:"Booked"
},
{
  place:39,code:"WDYDX",name:'Available',price:5,hours:1,name1:"Booked"
}
];
getLuggages(){
  return this.luggages
}
storage:any[]=[];
getStorage(){
  return this.storage
}
  constructor() { }
addToStorrage(luggage:any){


if(this.storage.indexOf(luggage)!=-1){
  return
};
this.storage.push(luggage);

this.luggageNumber.next(this.storage);
this.nrluggageBooked.next(this.storage);//


};
removeFromStorage(luggage:any){
  this.storage.splice(this.storage.indexOf(luggage),1);
  this.luggageNumber.next(this.storage);
  this.nrluggageBooked.next(this.storage);//
}


}
