import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  show: boolean = true;
  storage: any[] = [];
  myCodeShow: boolean = true;//booked
  constructor(private mysharedata: SharedataService) { }

  ngOnInit(): void {

    this.storage = this.mysharedata.getTerminal();
  }

  storeLuggage(luggage: any) {


    this.mysharedata.addToStorrage(luggage);
    this.mysharedata.getToggle(luggage);
    this.mysharedata.showCode.next(this.myCodeShow)





  }

}
