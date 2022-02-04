import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  // template: `<h1>Hello from app-hello</h1>`,
  // styles: [`h1{background-color:red;}`]
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  public message: string = 'Hello component'
  constructor() { }

  ngOnInit(): void {
  }
  changeMesssage() {
    this.message = "Button clicked"
  }
}
