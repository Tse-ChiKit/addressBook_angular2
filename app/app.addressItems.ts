import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: '[myTr]',
  template: `<td>{{addressItem.firstName}}</td>
             <td>{{addressItem.lastName}}</td>
             <td>{{addressItem.address}}</td>
             <button (click)="onDelete()">Delete</button>`
})

export class AddressComponent{

    @Input('myTr')
    addressItem;

    @Output()
    delete = new EventEmitter();

    onDelete(){
      this.delete.emit(this.addressItem);
    }
     
   
    
}