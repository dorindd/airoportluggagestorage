import { Component, OnInit } from '@angular/core';
import { SharedatatwoService } from '../sharedatatwo.service';

@Component({
  selector: 'terminalplaces',
  templateUrl: './terminalplaces.component.html',
  styleUrls: ['./terminalplaces.component.css'],
})
export class TerminalplacesComponent implements OnInit {
  places:any;
  myview: any

  constructor(private service: SharedatatwoService) {}

  ngOnInit(): void {
    this.service.luggageNumber1.subscribe((data) => {
      this.places = data;
      this.places = 'Place available.Check terminals 2 & 3 ';
    });
    this.service.show.subscribe((data) => {
      this.myview = data;

      if (this.places.length > 0) {
        setTimeout(() => {
          this.myview = false;
        }, 6000);
      }
    });
  }
}
