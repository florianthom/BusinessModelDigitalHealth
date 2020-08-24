import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  "./components/login/login.component";
import { RegistrateComponent } from  "./components/registrate/registrate.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: "Signin"}},
  { path: 'register', component: RegistrateComponent, data: {title: "Register"}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }