import { Component, input } from '@angular/core';
import { Food } from './Food';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  

  constructor(private cart: ProductCartService) {
    
  }

  products: Food[] = [
    {
      id : 1,
      name : "Muffing",
      type: "Pasteleria",
      price: 1000,
      stock: 5,
      image: "assets/img/muffing.jpeg",
      promo: true,
      quantity: 0,
    },
    {
      id : 2,
      name: "Croissant",
      type: "Pasteleria",
      price: 1500,
      stock: 10,
      image: "assets/img/croissant.jpeg",
      promo: false,
      quantity: 0,
    },
    {
      id : 3,
      name: "Tarta de Manzana",
      type: "Pasteleria",
      price: 2500,
      stock: 3,
      image: "assets/img/tarta-de-manzana.jpeg",
      promo: false,
      quantity: 0,
    },
    {
      id : 4,
      name: "Baguette",
      type: "Panaderia",
      price: 1200,
      stock: 0,
      image: "assets/img/baguette.jpeg",
      promo: false,
      quantity: 0,
    }
  ];


  addToCart(product:Food) {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }


}
