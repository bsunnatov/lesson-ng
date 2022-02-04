import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { NotShowDirective } from 'src/app/directives/not-show.directive';



@NgModule({

  declarations: [StudentListComponent,  NotShowDirective],
  imports: [
    CommonModule
  ],
  exports:[StudentListComponent]
})
export class StudentModule { }
