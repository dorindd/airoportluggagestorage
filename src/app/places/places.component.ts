import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
nrluggage:any;
show:boolean=true;
show1:boolean=true;
  constructor(private mysharedata:SharedataService) { }
  ngOnInit(): void {
    this.mysharedata.luggageNumber.subscribe(d=>{
      this.nrluggage=8-d.length;
      if(this.nrluggage!=8){
        this.show=true;
        this.show1=false;
      }else{
        this.show=false;
        this.show1=true;
      }
    });
  }
}
