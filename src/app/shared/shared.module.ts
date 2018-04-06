import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SharedRoutingModule
  ],
  declarations: []
})
export class SharedModule { }
