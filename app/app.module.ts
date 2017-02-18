// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressComponent } from './app.addressItems';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {}