import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: '[myTr]',
  template: `<td *ngFor="let key of addressItem | keys">{{addressItem[key]}}</td>
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