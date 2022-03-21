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
  nume: string = '';
payment:boolean = true;//pay

  constructor(
    private mysharedata: SharedataService,
    private mysharedata1: SharedatatwoService,

  ) {}
  ngOnInit(): void {
    this.storage = this.mysharedata.getStorage();
  }

  enter(luggage: any) {
    this.mysharedata1.getToggle1(luggage);
  }

  getcheck(luggage: any) {
    if (
      this.nume === 'TREWE' ||
      this.nume === 'MNHGY' ||
      this.nume === 'UJHGI' ||
      this.nume === 'UJNBS' ||
      this.nume === 'OINFK' ||
      this.nume === 'MNBGL' ||
      this.nume === 'ICFDX' ||
      this.nume === 'WDYDX'
    ) {
      this.mysharedata1.addToStorrage1(luggage);
      this.mysharedata.removeFromStorage(luggage);
      this.nume = '';
      this.mysharedata1.iconshow.next(this.payment)//pay




    }



  }
  cancel(luggage: any) {
    this.mysharedata.removeFromStorage(luggage);
    this.mysharedata.getToggle(luggage);
  }
}
