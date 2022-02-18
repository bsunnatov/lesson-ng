import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.scss']
})
export class HttpClientExampleComponent implements OnInit {
  errorMessage = '';
  displayedColumns = ['id', 'title', 'body', 'userId']
  pagedPosts: any[] = [];
  page = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  constructor(private service: DataServiceService) { }
  posts: any[] = [];
  ngOnInit(): void {
    this.errorMessage = '';
    this.service.getPosts().subscribe(a => {
      this.posts = a;
      this.page.length = a.length
      this.pagedPosts = this.posts.slice(1, 10)
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
  onChangePage(e: PageEvent) {
    this.page.pageIndex = e.pageIndex;
    const start = this.page.pageIndex * this.page.pageSize
    const end = this.page.pageSize * (this.page.pageIndex + 1)
    this.pagedPosts = this.posts.slice(start, end)
  }
}
