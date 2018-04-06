import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class LoginModule { }
