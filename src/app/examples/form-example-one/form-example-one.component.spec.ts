import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleOneComponent } from './form-example-one.component';

describe('FormExampleOneComponent', () => {
  let component: FormExampleOneComponent;
  let fixture: ComponentFixture<FormExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
