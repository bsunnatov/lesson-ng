import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedPipeComponent } from './embedded-pipe.component';

describe('EmbeddedPipeComponent', () => {
  let component: EmbeddedPipeComponent;
  let fixture: ComponentFixture<EmbeddedPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
