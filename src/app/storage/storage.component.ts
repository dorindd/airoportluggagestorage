import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
show:boolean=true;
show1:boolean=false;
show3:boolean=true;


message:string="Fully Booked.Please Try Later.";
  constructor() { }
  ngOnInit(): void {
  }
  getData():void{
this.show=false;
this.show1=true;
  }
  getBack():void{
this.show=true;
    this.show1=false;
  }
  getData1():void{
    this.show3=false;

      }
      getBack1():void{
    this.show3=true;
        
      }
      getBack5(){}
}
