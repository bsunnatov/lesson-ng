import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.scss']
})
export class HttpClientExampleComponent implements OnInit {
  errorMessage = '';
  constructor(private service: DataServiceService) { }
  posts: any[] = [];
  ngOnInit(): void {
    this.errorMessage = '';
    this.service.getPosts().subscribe(a => {
      this.posts = a;
      console.log(this.posts);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.log(error);
    });
  }
  postData() {
    this.service.postData("Salom").subscribe(a => {
      console.log(a)
    }, (err: HttpErrorResponse) => {
      console.log(err.message)
    });
  }
  editItem() {
    this.service.editItem(10, { name: "Bobir", age: 20 }).subscribe(a => {
      console.log(a)
    }, (err: HttpErrorResponse) => {
      console.log(err.message)
    });
  }

}
