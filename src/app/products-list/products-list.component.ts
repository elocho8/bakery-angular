import { Component, input, OnInit } from '@angular/core';
import { Food } from './Food';
import { ProductCartService } from '../product-cart.service';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent implements OnInit {
  

  constructor(
    private cart: ProductCartService,
    private productsDataService: ProductsDataService) {
    
  }

  products: Food[] = [];

  ngOnInit(): void{
    this.productsDataService.getAll()
    .subscribe(products => this.products = products)
  }


  addToCart(product:Food) {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }


}
