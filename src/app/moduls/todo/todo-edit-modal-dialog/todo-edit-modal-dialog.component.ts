import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-edit-modal-dialog',
  templateUrl: './todo-edit-modal-dialog.component.html',
  styleUrls: ['./todo-edit-modal-dialog.component.scss']
})
export class TodoEditModalDialogComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    id: new FormControl(''),
    deadline: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<TodoEditModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.todo) {
      const todo = data.todo as Todo;
      this.myForm.get('id')?.setValue(todo.id);
      this.myForm.get('title')?.setValue(todo.title);
      this.myForm.get('deadline')?.setValue(todo.deadline.substring(0, 10));
    }

  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }
  save() {
    if (this.myForm.valid) {
      console.log(this.myForm.value)
      this.dialogRef.close(this.myForm.value)
    }
  }
}
