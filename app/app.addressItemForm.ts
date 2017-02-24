import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from './address.interface'
import { AddressItemService } from './app.addressItemService'

@Component({
  selector: 'address-item-form',
  templateUrl: 'app/app.address-item-form.html'
})

export class AddressItemFormComponent implements OnInit{

  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  private addressItemService: AddressItemService ) {}

  ngOnInit(){
      this.addressForm = this.formBuilder.group({
          firstName:['',[Validators.required, Validators.minLength(2)]],
          lastName:['',[Validators.required, Validators.minLength(2)]],
          address:['',Validators.required]
      })
  }

  // onSubmit({ value, valid }: { value: Address, valid: boolean }) {
  //   console.log(value, valid);
  // }
  
  //add a new address
  onSubmit(addressItem){
     this.addressItemService.addItem(addressItem);
  }

}