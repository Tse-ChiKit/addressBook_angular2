import { Component, Input } from '@angular/core'

@Component({
  selector: 'addressItems',
  template: `<div>{{addressItems.id}} : {{addressItems.name}}</div>`
})

export class AddressComponent{
     
    addressItems = 
    {
      id: 1,
      name: "Gao",
      address: "5 Mary St"
    }
    
}