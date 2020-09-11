import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',   loadChildren: "./home/home.module#HomeModule"},
  { path: 'about',   loadChildren: "./about/about.module#AboutModule"},
  { path: 'impressum',   loadChildren: "./legal-notice/legal-notice.module#LegalNoticeModule"},
  { path: 'auth',   loadChildren: "./auth/auth.module#AuthModule"},
  { path: 'projects',   loadChildren: "./projects/projects.module#ProjectsModule"}
  // { path: 'canvas',   loadChildren: "./canvas/canvas.module#CanvasModule"},


  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
