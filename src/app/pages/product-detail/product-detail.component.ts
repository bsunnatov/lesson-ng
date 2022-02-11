import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: any = {};
  constructor(private activateRoute: ActivatedRoute, private service: DataServiceService) {
    this.id = activateRoute.snapshot.params['id'];
    if (this.id) {
      this.product = this.service.getProducts().find(a => a.id == this.id)
    }
  }

  ngOnInit(): void {
  }

}
