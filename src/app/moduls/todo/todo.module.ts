import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoEditFormComponent } from './todo-edit-form/todo-edit-form.component';
import { TodoEditModalDialogComponent } from './todo-edit-modal-dialog/todo-edit-modal-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoListComponent, TodoEditFormComponent, TodoEditModalDialogComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class TodoModule { }
