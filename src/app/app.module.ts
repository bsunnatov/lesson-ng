import { StudentListComponent } from './moduls/student/student-list/student-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UnlessDirective } from './directives/unless.directive';
import { StudentModule } from './moduls/student/student.module';
import { NotShowDirective } from './directives/not-show.directive';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    SecondComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentModule
  ],
  exports:[],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
