import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { PlatformComponent } from './platforms/platform/platform.component';
import { HttpClientModule } from '@angular/common/http'


import { PlatformsService } from './platforms/platforms.service';
import { PlansComponent } from './plans/plans.component';
import { PlanComponent } from './plans/plan/plan.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlatformsComponent,
    PlatformComponent,
    PlansComponent,
    PlanComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [PlatformsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
