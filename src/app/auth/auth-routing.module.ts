import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  "./components/login/login.component";
import { RegistrateComponent } from  "./components/registrate/registrate.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }