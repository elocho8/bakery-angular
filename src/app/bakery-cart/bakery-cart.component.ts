import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Food } from '../products-list/Food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bakery-cart',
  templateUrl: './bakery-cart.component.html',
  styleUrl: './bakery-cart.component.scss'
})
export class BakeryCartComponent {

  cartList$!: Observable<Food[]>;

  constructor(private cart:ProductCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
}
