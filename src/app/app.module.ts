import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UnlessDirective } from './directives/unless.directive';
import { StudentModule } from './moduls/student/student.module';
import { DataServiceService } from './services/data-service.service';
import { FormExampleModule } from './examples/form-example/form-example.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
// определение маршрутов

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    SecondComponent,
    UnlessDirective,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModule,
    FormExampleModule
  ],
  exports:[],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
