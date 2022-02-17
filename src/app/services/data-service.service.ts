import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataServiceService {
  private jsonPlaceHolderBaseUrl = "https://jsonplaceholder.typicode.com"
  private data: any[] = [];
  private products: any[] = [{ id: 1, name: 'Lenevo', details: 'Lenevo y 700 16 GB RAM' },
  { id: 2, name: 'HP', details: 'HP 1600 32 GB RAM' }]
  constructor(private logService: LogService, private http: HttpClient) { }
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
  //GET
  getPosts() {
    return this.http.get<any>(`${this.jsonPlaceHolderBaseUrl}/posts`)
  }
  //POST to server
  postData(value: string) {
    return this.http.post("https://localhost:44306/api/Values", { value })
  }
  //PUT
  editItem(id: number, model: any) {
    return this.http.put("https://localhost:44306/api/Values/" + id, { model })
  }
}
