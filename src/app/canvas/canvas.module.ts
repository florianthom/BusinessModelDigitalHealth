import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanvasRoutingModule} from "./canvas-routing.module";
import { TableGeneralComponent } from './components/table-general/table-general.component';
import { DistanceMatrixComponent } from './components/distance-matrix/distance-matrix.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { MaterialModule } from "@app/material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CanvasCardComponent } from './components/canvas-card/canvas-card.component';
import { BusinessModelPickerComponent } from './components/business-model-picker/business-model-picker.component';
import { BusinessModelCardComponent } from './components/business-model-card/business-model-card.component';


@NgModule({
  declarations: [
    TableGeneralComponent,
    DistanceMatrixComponent,
    CanvasComponent,
    CanvasCardComponent,
    BusinessModelPickerComponent,
    BusinessModelCardComponent
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CanvasModule { }
