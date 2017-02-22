import { Component, Input } from '@angular/core';

import { AddressItemService } from './app.addressItemService'
@Component({
    selector: 'addressTable',
    templateUrl: 'app/app.addressTable.html'
})
export class AddressTableComponent {

    addressItems;

    constructor(private addressItemService: AddressItemService){};

    ngOnInit() {
    this.addressItems = this.addressItemService.getAllItems();
  }

    onAdressItemDelete(mediaItem) {
    this.addressItemService.deleteItem(mediaItem);
  }

    addressTable = "table";

}