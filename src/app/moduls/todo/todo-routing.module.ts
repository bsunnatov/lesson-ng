import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoEditModalDialogComponent } from './todo-edit-modal-dialog/todo-edit-modal-dialog.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [TodoEditModalDialogComponent]
})
export class TodoRoutingModule { }
