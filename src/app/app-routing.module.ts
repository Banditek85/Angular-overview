import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ObservablesComponent } from './observables/observables.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"services", component: ServicesComponent},
  {path:"observables", component: ObservablesComponent},
  {path:"routing", component: RoutingComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
