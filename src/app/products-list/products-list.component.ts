import { Component, input } from '@angular/core';
import { Food } from './Food';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  
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


  upQuantity(product: Food): void {
    if(product.quantity < product.stock)
    product.quantity++;
  }

  downQuantity(product: Food): void {
    if(product.quantity > 0)
    product.quantity--;
  }

  onChangeQuantity(event: any, product:Food) {
    const inputQuantity = event.target.value;
    if(!isNaN(inputQuantity) && inputQuantity > 0 && inputQuantity <= product.stock){
      product.quantity = inputQuantity;
    }else 
      event.target.value = product.quantity;

  }


}
