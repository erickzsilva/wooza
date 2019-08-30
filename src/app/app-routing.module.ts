import { NgModule } from '@angular/core';
//import { HomeComponent } from './home/home.component'
import { PlatformsComponent } from './platforms/platforms.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{path: '', component: HomeComponent}
  {path: '', component: PlatformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
