import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../products-list/Food';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {

  @Input()
  quantity!: number;

  @Input()
  max!:number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else 
      this.maxReached.emit("No hay mas stock");
  }

  downQuantity(): void {
    if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  onChangeQuantity(event: any) {
    const inputQuantity = event.target.value;
    if(!isNaN(inputQuantity) && inputQuantity > 0 && inputQuantity <= this.max){
      this.quantity = inputQuantity;
      this.quantityChange.emit(this.quantity);
    }else 
      event.target.value = this.quantity;
    
  }
}
