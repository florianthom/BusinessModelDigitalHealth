import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MaterialModule} from "../material/material.module";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
