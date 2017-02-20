import { Component, Input } from '@angular/core';

@Component({
    selector: 'addressTable',
    templateUrl: 'app/app.addressTable.html'
})
export class AddressTableComponent {

    addressItems = [
        {
            id: 1,
            firstName: "Gao",
            lastName: "YaLin",
            address: "5 Mary St"
        },
        {
            id: 2,
            firstName: "Xie",
            lastName: "ZhiJie",
            address: "15 Mary St"
        },
        {
            id: 3,
            firstName: "Monkey",
            lastName: "D Lufyy",
            address: "115 Clayton St"
        }
    ]

    addressTable = "table";

}