import { TodoService } from './../services/todo.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Todo } from '../model/todo.model';
import { TodoEditModalDialogComponent } from '../todo-edit-modal-dialog/todo-edit-modal-dialog.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BehaviorSubject, from, fromEvent, of, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
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
  @ViewChild('searchTodo', { static: true }) searchTodo: ElementRef | undefined;
  constructor(private dialog: MatDialog, private todoService: TodoService) { }

  ngOnInit(): void {
    //const sbj = new Subject<number>();
    const sbj2 = new BehaviorSubject<number>(5);
    const sbj = new ReplaySubject(2);
    of('Hello').subscribe((vl) => console.log(vl));
    from('Hello').subscribe((vl) => console.log(vl));
    sbj.next(4);
    sbj.next(5);
    sbj.next(6);
    sbj.subscribe((vl) => console.log(`1st: ${vl}`));
    sbj.next(7);
    sbj.next(8);
    sbj.next(9);
    sbj.subscribe((vl) => console.log(`2nd: ${vl}`));
    sbj.next(100);
    sbj.next(101);
    sbj.subscribe((vl) => console.log(`3nd: ${vl}`));
    //sbj.subscribe((vl) => console.log(`1st: ${vl}`));
    // sbj2.subscribe((vl) => console.log(`1st: ${vl}`));
    // sbj2.subscribe((vl) => console.log(`2st: ${vl}`));
    // sbj2.next(1)
    // sbj.next(2)
    // sbj.next(3)
    // from([7, 21, 10])
    //   .pipe(map((num) => (num <= 10 ? 1 : 0)))
    //   .subscribe((vl) => console.log(vl));

    this.reload()
    fromEvent(this.searchTodo?.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .subscribe((s: any) => {
        console.log(s.target.value)
        let serachText = s.target.value;
        if (serachText) {
          const result = this.todos.filter(a => a.title.toLowerCase().startsWith(serachText.toLowerCase()))
          this.filterBySearch(result)
        }
        else {
          this.filterBySearch(this.todos);
        }
      })
  }
  filterBySearch(result: Todo[]) {
    this.page.pageIndex = 0;
    this.page.length = result.length;
    const start = this.page.pageIndex * this.page.pageSize
    const end = this.page.pageSize * (this.page.pageIndex + 1)
    this.pagedTodos = result.slice(start, end)
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
    this.page.pageSize = e.pageSize;
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
