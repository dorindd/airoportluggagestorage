import { Component, OnInit } from '@angular/core';
import { SharedatatwoService } from '../sharedatatwo.service';
import { SharedataService } from '../sharedata.service';
import { Router } from '@angular/router';
import { pulse } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'removeluggage',
  templateUrl: './removeluggage.component.html',
  styleUrls: ['./removeluggage.component.css'],

  animations: [
    trigger('bounce', [transition('* => *', useAnimation(pulse))])

  ],

})
export class RemoveluggageComponent implements OnInit {

  bounce: any;
storage1:any[]=[]
vizibil:boolean=true;

allPay:any//nav

show:any=false;//
show1:any=false;//
show2:any=true;//




  constructor(private mysharedata1:SharedataService,private mysharedata:SharedatatwoService,private route:Router) { }
  ngOnInit(): void {
 




    this.mysharedata.myPay.subscribe((data:any)=>{//nav
      this.allPay=data.length

    })


    this.storage1=this.mysharedata.getStorage1();





  }
  removeStorage(luggage:any){
   this.mysharedata.removeFromStorage1(luggage);



   this.mysharedata1.getToggle(luggage);
   this.mysharedata.getToggle1(luggage);
   this.mysharedata.show.next(this.vizibil)



   setTimeout(() => {
this.show=true;
     this.show2 = false;
setTimeout(() =>{
  this.show=false;
  this.show1=true;
  this.show2=false


},1000)


   },300)







}
  inc(luggage:any){
  luggage.hours ++


}
  dec(luggage:any){
    if(luggage.hours>1){
    luggage.hours --;


  }
  }



  functionStop() {
    this.show1 = false;
    this.show2=true;



    if (this.allPay == 0) {



          setTimeout(() => {
            this.show1 = false;
            this.route.navigate([`${'/'}`])

          },3000)
        }






  }

  }
