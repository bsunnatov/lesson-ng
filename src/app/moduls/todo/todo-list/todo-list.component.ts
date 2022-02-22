import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Todo } from '../model/todo.model';
import { TodoEditModalDialogComponent } from '../todo-edit-modal-dialog/todo-edit-modal-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id', 'title', 'completed', 'deadline', 'action']
  todos: Todo[] = [];
  pagedTodos: Todo[] = [];
  page = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

    for (let index = 1; index < 21; index++) {
      this.todos.push({ id: index, title: `Task-${index}`, completed: false, deadline: new Date() })
    }
    this.page.length = this.todos.length;
    this.pagedTodos = this.todos.slice(0, 10)
  }
  onChangePage(e: PageEvent) {
    this.page.pageIndex = e.pageIndex;
    const start = this.page.pageIndex * this.page.pageSize
    const end = this.page.pageSize * (this.page.pageIndex + 1)
    this.pagedTodos = this.todos.slice(start, end)
  }
  addTodo() {
    this.dialog.open(TodoEditModalDialogComponent, {
      width: '50%',
      data: {
        todo: {
          id: 1,
          title: 'Task1'
        }
      }
    })
  }
}
