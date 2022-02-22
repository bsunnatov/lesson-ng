import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-edit-modal-dialog',
  templateUrl: './todo-edit-modal-dialog.component.html',
  styleUrls: ['./todo-edit-modal-dialog.component.scss']
})
export class TodoEditModalDialogComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({});
  constructor(public dialogRef: MatDialogRef<TodoEditModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
