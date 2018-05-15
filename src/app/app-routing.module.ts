import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PlanetsComponent } from './planets/planets.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: "two", component: PageTwoComponent},
  {path: "table", component: PlanetsComponent},
  {path: "login", component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
