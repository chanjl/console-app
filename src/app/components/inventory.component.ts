import { Component, OnInit, EventEmitter, Output } from '@angular/core';

export interface LineItem {
  label: string;
  source: string;
  quantity: number;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Output() //events
  sendLineItem = new EventEmitter<LineItem>();
  
  inventory: LineItem[] = [
    { label: "Acorn Squash", source: "acorn_squash.png", quantity: 10 },
    { label: "Celery", source: "celery.png", quantity: 5 },
    { label: "Zucchini", source: "zucchini.png", quantity: 18 },
    { label: "Tomato", source: "tomato.png", quantity: 7 }
  ];

  itemSelected(index: number) {
    console.log('selected: ', this.inventory[index]);
    var existedObject = this.inventory[index];
    if (existedObject.quantity - 1 < 0) {}
    else {
      existedObject.quantity--;
      const eventObject: LineItem = {
        label: this.inventory[index].label,
        source: this.inventory[index].source,
        quantity: 1
      }
      this.sendLineItem.next(eventObject);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
