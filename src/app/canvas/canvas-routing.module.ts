import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableGeneralComponent } from  "./components/table-general/table-general.component";

const routes: Routes = [
  { path: 'overview', component: TableGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CanvasRoutingModule { }