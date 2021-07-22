import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedatatwoService {
  showenter:boolean=true;
  getToggle1(luggage:any){
    luggage.showenter=!luggage.showenter
  }
  luggages1:any[]=[
    {
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
  getLuggages1(){
    return this.luggages1
  }
  storage1:any[]=[];
  getStorage1(){
    return this.storage1
  }
  constructor() { }
  addToStorrage1(luggage:any){
    if(this.storage1.indexOf(luggage)!=-1){
      return
    };
    this.storage1.push(luggage)
    }
    removeFromStorage1(luggage:any){
      this.storage1.splice(this.storage1.indexOf(luggage),1)
    }
}
