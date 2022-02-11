import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class Phone {
  constructor(public title: string,
    public price: number,
    public company: string) { }
}
@Component({
  selector: 'app-form-example-one',
  templateUrl: './form-example-one.component.html',
  styleUrls: ['./form-example-one.component.scss']
})
export class FormExampleOneComponent implements OnInit {
  title: string = "";
  price: number = 0;
  company: string = "";
  phone: Phone = new Phone('', 0, 'aqwq')
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  constructor() { }

  ngOnInit(): void {
  }

  addPhone() {
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  }
}
