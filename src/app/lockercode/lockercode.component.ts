import { Component, OnInit } from '@angular/core';
import{SharedataService} from '../sharedata.service';
@Component({
  selector: 'lockercode',
  templateUrl: './lockercode.component.html',
  styleUrls: ['./lockercode.component.css']
})
export class LockercodeComponent implements OnInit {
show:boolean=true;
storage:any[]=[]
  constructor(private mysharedata:SharedataService) { }
  ngOnInit(): void {
this.storage=this.mysharedata.getLuggages();
  }
  storeLuggage(luggage:any){
    this.mysharedata.addToStorrage(luggage);
    this.mysharedata.getToggle(luggage);
    
  }
}
