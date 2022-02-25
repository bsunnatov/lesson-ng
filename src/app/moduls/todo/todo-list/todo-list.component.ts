import { TodoService } from './../services/todo.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Todo } from '../model/todo.model';
import { TodoEditModalDialogComponent } from '../todo-edit-modal-dialog/todo-edit-modal-dialog.component';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id', 'title', 'deadline', 'completed', 'action']
  todos: Todo[] = [];
  pagedTodos: Todo[] = [];
  page = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  constructor(private dialog: MatDialog, private todoService: TodoService) { }

  ngOnInit(): void {

    this.reload()

  }
  reload() {
    this.todoService.getAll().subscribe(a => {
      this.todos = a
      this.page.length = this.todos.length;
      this.pagedTodos = this.todos.slice(0, 10)
    })
  }
  onChangePage(e: PageEvent) {
    this.page.pageIndex = e.pageIndex;
    const start = this.page.pageIndex * this.page.pageSize
    const end = this.page.pageSize * (this.page.pageIndex + 1)
    this.pagedTodos = this.todos.slice(start, end)
  }
  edit(row: Todo) {
    console.log(row)
    const dialogref = this.dialog.open(TodoEditModalDialogComponent, {
      width: '50%',
      data: {
        todo: row
      }
    })
    dialogref.afterClosed().subscribe(s => {
      if (s) {
        this.todoService.update(s.id, s).subscribe(a => {
          this.reload()
        }, (err) => {
          console.log(err)
        })
      }
    })
  }
  addTodo() {
    const dialogref = this.dialog.open(TodoEditModalDialogComponent, {
      width: '50%',
      data: {

      }
    })
    dialogref.afterClosed().subscribe(s => {
      if (s) {
        this.todoService.create(s).subscribe(a => {
          this.reload()
        }, (err) => {
          console.log(err)
        })
      }
    })
  }
  deleteTodo(row: Todo) {
    this.todoService.delete(row.id).subscribe(a => {
      this.reload()
    }, (err) => {
      console.log(err)
    })
  }
  switchTodo(event: MatCheckboxChange, row: Todo) {
    row.completed = event.checked
    this.todoService.swithTodo(row.id, row.completed).subscribe(a => {
      this.reload()
    }, (err) => {
      console.log(err)
    })
  }
}
