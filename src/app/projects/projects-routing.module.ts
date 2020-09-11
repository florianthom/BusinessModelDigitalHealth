import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsPickerComponent} from "./components/projects-picker/projects-picker.component";
import {ProjectsComponent} from "./projects.component";


const routes: Routes = [
  // "projects/"
  { path: '', component: ProjectsPickerComponent, data: {title: "Projects"}, pathMatch: "full"},
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {path: ":project_id", redirectTo: ":project_id/canvases", pathMatch: "full"},
      {path: ":project_id/canvases", loadChildren: "../canvas/canvas.module#CanvasModule"}
    ]
  },
];

      // {path: ":project_id", redirectTo: ":project_id/canvases", pathMatch: "full"},

// const routes: Routes = [
//   // "projects/"
//   { path: '', component: ProjectsPickerComponent, data: {title: "Projects"}, pathMatch: "full"},
//   {
//     path: 'projects/:project_id',
//     component: ProjectsComponent,
//     children: [
//       {path: "", redirectTo: "canvases", pathMatch: "full"},
//       {path: "canvases", loadChildren: "../canvas/canvas.module#CanvasModule"}
//     ]
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectsRoutingModule { }
// { path: 'projects',   loadChildren: "./projects/projects.module#ProjectsModule"}
