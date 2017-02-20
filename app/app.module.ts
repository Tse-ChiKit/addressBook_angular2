// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressComponent } from './app.addressItems';
import { AddressTableComponent } from './app.addressTable'


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressTableComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {}