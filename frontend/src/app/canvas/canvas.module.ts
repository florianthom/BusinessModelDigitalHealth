import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanvasRoutingModule} from "./canvas-routing.module";
import { TableGeneralComponent } from './components/table-general/table-general.component';


@NgModule({
  declarations: [TableGeneralComponent],
  imports: [
    CommonModule,
    CanvasRoutingModule
  ]
})
export class CanvasModule { }
