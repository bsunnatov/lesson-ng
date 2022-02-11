import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable()
export class DataServiceService {
  private data: any[] = [];
  private products: any[] = [{ id: 1, name: 'Lenevo', details: 'Lenevo y 700 16 GB RAM' }, { id: 2, name: 'HP', details: 'HP 1600 32 GB RAM' }]
  constructor(private logService: LogService) { }
  getData(): Product[] {
    this.logService.information('malumotlar olindi...')
    return this.data;
  }
  addData(product: Product) {
    this.logService.information('Yangi malumot qushildi...')
    this.data.push(product)
  }
  getProducts() {
    return this.products;
  }
}
