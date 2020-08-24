import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanvasRoutingModule} from "./canvas-routing.module";
import { TableGeneralComponent } from './components/table-general/table-general.component';
import { DistanceMatrixComponent } from './components/distance-matrix/distance-matrix.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { MaterialModule } from "@app/material/material.module";
// import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    TableGeneralComponent,
    DistanceMatrixComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    MaterialModule
  ]
})
export class CanvasModule { }
