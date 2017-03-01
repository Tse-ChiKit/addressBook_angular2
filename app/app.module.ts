// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddressComponent } from './app.addressItems';
import { AddressTableComponent } from './app.addressTable';
import { AddressItemFormComponent} from './app.addressItemForm';
import { KeysPipe} from './app.keys.pipe';
import { AddressItemService } from './app.addressItemService';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressTableComponent,
    AddressItemFormComponent,
    KeysPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    AddressItemService
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ]
})
export class AppModule {}