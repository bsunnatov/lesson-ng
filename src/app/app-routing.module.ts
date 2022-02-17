import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HttpClientExampleComponent } from './pages/http-client-example/http-client-example.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student', component: FirstComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'http-client', component: HttpClientExampleComponent },
  { path: 'pipes', loadChildren: () => import('./moduls/pipe-example/pipe-example.module').then(a => a.PipeExampleModule) },
  { path: 'productDetails/:id', component: ProductDetailComponent },
  {
    path: '**',
    //redirectTo: '/'
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
