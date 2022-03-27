import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedataService } from '../sharedata.service';
import { SharedatatwoService } from '../sharedatatwo.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  nrluggage: any;
  codeLocker:boolean =false;//booked

  mypyment:any=false;//pay


allPay:any=0


  constructor(private mysharedata: SharedataService,private paymentservice:SharedatatwoService,private route:Router) {}
  ngOnInit(): void {
    this.paymentservice.myPay.subscribe((d: any) => {
      this.allPay = d.length; //nav

    })






    this.mysharedata.nrluggageBooked.subscribe((d) => {
      this.nrluggage = d.length;
    });

    this.mysharedata.showCode.subscribe((d: any) => {
      this.codeLocker = d;

    });



    this.paymentservice.iconshow.subscribe((d: any) => {
      this.mypyment = d

    })






  }


  getBooked(pageName1: string, pageName: string) {
    if (this.nrluggage > 0) { this.route.navigate([`${pageName1}`]) }
    else { this.route.navigate([`${pageName}`]) }

  }
  getPay(pageName1: string, pageName: string) {
    if (this.allPay > 0) { this.route.navigate([`${pageName1}`]) }
    else { this.route.navigate([`${pageName}`]) }

  }


}
