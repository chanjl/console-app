import { Component } from '@angular/core';

import { LineItem } from './components/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'console-app';
  
  cart: LineItem[] = [];

  addToCart(eventObject: LineItem) {
    console.log('added: ', eventObject);
    var existedObject = this.cart.find(function(element) {
      return element.label == eventObject.label; 
    });
    if (existedObject === undefined)
      this.cart.push(eventObject);
    else existedObject.quantity++;
  }

  removeFromCart(eventObject: LineItem) {
    console.log('deleted: ', eventObject);
  }
}
