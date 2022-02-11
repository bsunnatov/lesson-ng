import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { DataServiceService } from '../services/data-service.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  //providers: [DataServiceService]
})
export class FirstComponent implements OnInit {

  items: Product[] = [];
  item: Product = new Product('', 0, '');
  // title: string = '';
  // price: number = 0;
  // brand: string = '';
  brands: string[] = ['Sumsung', 'Apple', 'Nokia'];
  myForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required)
  });
  search: FormControl = new FormControl()
  @Input() messageFromSecond = ''
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.myForm.get('title')?.valueChanges.subscribe(a => {
      console.log(a)
    })
    this.search.valueChanges.subscribe(a => {
      console.log(a);
    })
    this.reloadData();
  }
  reloadData() {
    const data = this.dataService.getData();
    this.items = [...data];
  }
  addAddItem() {
    if (!this.myForm.invalid) {
      this.dataService.addData(this.myForm.value);
      this.reloadData();
    }
    else {
      alert('Barcha maydonlarni tuldiring')
    }
  }
}
