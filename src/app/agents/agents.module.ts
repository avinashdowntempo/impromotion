import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AgentsRoutingModule } from './agents-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    AgentsRoutingModule
  ],
  declarations: []
})
export class AgentsModule { }
