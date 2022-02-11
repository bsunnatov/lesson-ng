import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.products = this.service.getProducts()
  }

}
