import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MaterialModule} from "../material/material.module";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { CustomDatepipePipe } from './pipes/custom-datepipe.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    CustomDatepipePipe
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
    SidenavComponent,
    CustomDatepipePipe
  ]
})
export class SharedModule { }
