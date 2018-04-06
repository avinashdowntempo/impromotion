import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SuperAdminRoutingModule } from './super-admin-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SuperAdminRoutingModule
  ],
  declarations: []
})
export class SuperAdminModule { }
