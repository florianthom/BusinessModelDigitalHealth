import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanvasComponent} from "./components/canvas/canvas.component";

const routes: Routes = [
  { path: 'overview', component: CanvasComponent, data: {title: "Workspace"}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CanvasRoutingModule { }