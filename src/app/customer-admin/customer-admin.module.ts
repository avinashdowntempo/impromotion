import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CustomerAdminRoutingModule } from './customer-admin-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    CustomerAdminRoutingModule
  ],
  declarations: []
})
export class CustomerAdminModule { }
