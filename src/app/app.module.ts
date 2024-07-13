import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { FormsModule } from '@angular/forms';
import { BakeryAboutComponent } from './bakery-about/bakery-about.component';
import { BakeryProductsComponent } from './bakery-products/bakery-products.component';
import { BakeryCartComponent } from './bakery-cart/bakery-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    BakeryAboutComponent,
    BakeryProductsComponent,
    BakeryCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
