import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatimentsComponent } from './batiments/batiments.component';
import { ClientsComponent } from './clients/clients.component';
import { ListeComponent } from './liste/liste.component';


const routes: Routes = [
  {path:'clients' ,component: ClientsComponent},
  {path:'batiments' ,component: BatimentsComponent},
  {path:'liste' ,component: ListeComponent},
  {path:'client/:id',component:ClientsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
