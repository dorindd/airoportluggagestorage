import { Component, OnInit } from '@angular/core';
import { SharedatatwoService } from '../sharedatatwo.service';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'removeluggage',
  templateUrl: './removeluggage.component.html',
  styleUrls: ['./removeluggage.component.css'],
})
export class RemoveluggageComponent implements OnInit {
storage1:any[]=[]
vizibil:boolean=true;


  constructor(private mysharedata1:SharedataService,private mysharedata:SharedatatwoService) { }
  ngOnInit(): void {


    this.storage1=this.mysharedata.getStorage1();


  }
  removeStorage(luggage:any){
   this.mysharedata.removeFromStorage1(luggage);


   this.mysharedata1.getToggle(luggage);
   this.mysharedata.getToggle1(luggage);
   this.mysharedata.show.next(this.vizibil)

  }
  inc(luggage:any){
  luggage.hours ++
}
  dec(luggage:any){
    if(luggage.hours>1){
    luggage.hours --;
  }
  }
  }
