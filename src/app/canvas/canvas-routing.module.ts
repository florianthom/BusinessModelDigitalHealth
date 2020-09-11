import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanvasComponent} from "./components/canvas/canvas.component";
import {CanvasPickerComponent} from "./components/canvasesList/canvas-picker/canvas-picker.component";

const routes: Routes = [
  // e.g. http://localhost:4200/projects/123/canvases
  { path: "", component: CanvasPickerComponent, data: {title: "Workspace"}, pathMatch: "full"},
  { path: ":canvas_id", component: CanvasComponent, data: {title: "Workspace"}},
];

// {
//   path: '',
//   component: ProjectsComponent,
//   children: [
//     {path: ":project_id", redirectTo: ":project_id/canvases", pathMatch: "full"},
//     {path: ":project_id/canvases", loadChildren: "../canvas/canvas.module#CanvasModule"}
//   ]
// },



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CanvasRoutingModule { }