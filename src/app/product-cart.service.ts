import { Injectable } from '@angular/core';
import { Food } from './products-list/Food';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Food[] = [];
  cartList: BehaviorSubject<Food[]> = new BehaviorSubject(this._cartList);


  constructor(){}
  

  addToCart(product: Food){
    let item: Food | undefined = this._cartList.find((v1) => v1.id == product.id);
    if(product.quantity > 0){
      if(!item){
        this._cartList.push({... product});
      }else{
        item.quantity += product.quantity;
      }
      console.log(this._cartList.length);

      this.cartList.next(this._cartList);
    }
  }
}
