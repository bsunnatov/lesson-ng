import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditModalDialogComponent } from './todo-edit-modal-dialog.component';

describe('TodoEditModalDialogComponent', () => {
  let component: TodoEditModalDialogComponent;
  let fixture: ComponentFixture<TodoEditModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEditModalDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
