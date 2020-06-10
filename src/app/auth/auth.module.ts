import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { FormMessagesComponent } from './components/form-messages/form-messages.component';


// // Dont import! it breaks the app! Reason: it imports one of BrowserModule, BrowserAnimationsModule,
// //   HttpModule or HttpClientModule i guess, and each one can only be importet once
// import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [LoginComponent, RegistrateComponent, FormMessagesComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
