import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface LineItem {
  label: string;
  source: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() //attributes
  cartItems: LineItem[] = []; //default empty cart
  
  @Output() //events
  deleteItem = new EventEmitter<LineItem>();

  itemToDelete(index: number) {
    console.log('selected: ', this.cartItems[index]);
    var existedObject = this.cartItems[index];
    if (existedObject.quantity - 1 == 0)
      this.cartItems.splice(index, 1);
    else existedObject.quantity--;
    // this.cartItems[index].quantity--;
    // const eventObject: LineItem = {
    //   label: this.cartItems[index].label,
    //   source: this.cartItems[index].source,
    //   quantity: this.cartItems[index].quantity,

    // }
    this.deleteItem.next(existedObject);
  }

  constructor() { }

  ngOnInit() {
  }

}
