// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressComponent } from './app.addressItems';
import { AddressTableComponent } from './app.addressTable';
import { KeysPipe} from './app.keys.pipe';
import { AddressItemService } from './app.addressItemService'

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressTableComponent,
    KeysPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    AddressItemService
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {}