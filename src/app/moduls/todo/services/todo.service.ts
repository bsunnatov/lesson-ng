import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {

  }
  getAll() {
    return this.http.get(`${baseUrl}/todo/getAll`)
  }
  getById(id: number) {
    return this.http.get(`${baseUrl}/todo/${id}`)
  }
  create(model: Todo) {
    return this.http.post(`${baseUrl}/todo`, model)
  }
  update(id: number, model: Todo) {
    return this.http.put(`${baseUrl}/todo/${id}`, model)
  }
  delete(id: number) {
    return this.http.delete(`${baseUrl}/todo/${id}`)
  }
}
