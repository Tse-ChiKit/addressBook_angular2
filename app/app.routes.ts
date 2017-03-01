import { Routes, RouterModule } from '@angular/router';

import { AddressItemFormComponent } from './app.addressItemForm';
import { AddressTableComponent } from './app.addressTable';

export const ROUTES: Routes = [
    { path: '', component: AddressTableComponent },
    { path: 'add', component: AddressItemFormComponent}
    // { path: 'allRecords', component: AddressTableComponent }
];

export const routing = RouterModule.forRoot(ROUTES);
