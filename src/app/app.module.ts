import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { FormComponent } from './form/form.component';
import { PlanetsComponent } from './planets/planets.component';
import { HomeComponent } from './home/home.component';

import { GenServiceService } from './gen-service.service';
import { SolarService } from './solar.service';


@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    FormComponent,
    PlanetsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SolarService, GenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
