import { Component, Input } from '@angular/core'

@Component({
  selector: 'addressItems',
  template: `<div>{{testMsg}}</div>`
})

export class AddressComponent{

    @Input()
    testMsg = 'testing';
     
   
    
}