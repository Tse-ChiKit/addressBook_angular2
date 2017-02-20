//Custom Serive for data and functions encapsulation
export class AddressItemService {

    getAllItems(){
        return this.addressItems;
    }

    deleteItem(addressItem) {
        let index = this.addressItems.indexOf(addressItem);
        if (index >= 0) {
            this.addressItems.splice(index, 1);
        }
    }

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
    ];

}