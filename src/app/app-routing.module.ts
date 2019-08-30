import { NgModule } from '@angular/core';
//import { HomeComponent } from './home/home.component'
import { PlatformsComponent } from './platforms/platforms.component'
import { PlansComponent} from './plans/plans.component'
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component'


const routes: Routes = [
  {path: '', redirectTo: 'platforms', pathMatch: 'full'},
  {path: 'platforms', component: PlatformsComponent},
  {path: 'plans/:id', component: PlansComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
