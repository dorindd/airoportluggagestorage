import { Component, OnInit } from '@angular/core';

import { SharedataService } from '../sharedata.service';
import { SharedatatwoService } from '../sharedatatwo.service';
@Component({
  selector: 'luggaestorage',
  templateUrl: './luggaestorage.component.html',
  styleUrls: ['./luggaestorage.component.css'],
})
export class LuggaestorageComponent implements OnInit {
  showenter: boolean = false;
  storage: any[] = [];
  nume: any ;
payment:boolean = true;//pay

  constructor(
    private mysharedata: SharedataService,
    private mysharedata1: SharedatatwoService,

  ) {}
  ngOnInit(): void {


    this.storage = this.mysharedata.getStorage();


  }


  updateUser(event:any){
    this.nume=(event.target as HTMLInputElement).value;



  }





  enter(luggage: any) {


      this.mysharedata1.getToggle1(luggage);
  }



  randNumber: any = Math.floor(Math.random() * 1000000);





  getcheck(luggage: any) {




    if (
      this.nume === 'TREWE'+ this.randNumber  ||
      this.nume === 'MNHGY' + this.randNumber  ||
      this.nume === 'UJHGI' + this.randNumber ||
      this.nume === 'UJNBS' + this.randNumber ||
      this.nume === 'OINFK' + this.randNumber ||
      this.nume === 'MNBGL' + this.randNumber ||
      this.nume === 'ICFDX' + this.randNumber ||
      this.nume === 'WDYDX' + this.randNumber
    )


    {


      this.mysharedata1.addToStorrage1(luggage);
      this.mysharedata.removeFromStorage(luggage);

this.nume='';

      this.mysharedata1.iconshow.next(this.payment)//pay

      







    }



  }
  cancel(luggage: any) {
    this.mysharedata.removeFromStorage(luggage);
    this.mysharedata.getToggle(luggage);
  }
}
