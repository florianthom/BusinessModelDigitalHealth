import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalNoticeRoutingModule } from "./legal-notice-routing.module";
import { ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    LegalNoticeRoutingModule
  ]
})
export class LegalNoticeModule { }
