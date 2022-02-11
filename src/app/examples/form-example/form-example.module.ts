import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleOneComponent } from '../form-example-one/form-example-one.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormExampleOneComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FormExampleOneComponent]
})
export class FormExampleModule { }
