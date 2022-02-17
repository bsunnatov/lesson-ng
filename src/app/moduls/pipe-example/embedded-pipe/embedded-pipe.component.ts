import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedded-pipe',
  templateUrl: './embedded-pipe.component.html',
  styleUrls: ['./embedded-pipe.component.scss']
})
export class EmbeddedPipeComponent implements OnInit {
  currentDate: any;
  number1: number = 14.2
  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date()
  }

}
