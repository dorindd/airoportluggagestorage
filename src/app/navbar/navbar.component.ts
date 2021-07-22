import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed:boolean=true;
  nrluggage:any;
  show:boolean=false;
  constructor(private mysharedata:SharedataService) { }
  ngOnInit(): void {
    this.mysharedata.nrluggageBooked.subscribe(d=>{
      this.nrluggage=d.length;
      if(this.nrluggage>0){
        this.show=true;
      }
    });
  }
  }
