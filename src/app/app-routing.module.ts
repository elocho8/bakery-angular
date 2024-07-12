import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryProductsComponent } from './bakery-products/bakery-products.component';
import { BakeryAboutComponent } from './bakery-about/bakery-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: BakeryProductsComponent
  },
  {
    path: 'about',
    component: BakeryAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
