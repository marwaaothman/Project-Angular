import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBatimentComponent } from './batiments/add-batiment/add-batiment.component';
import { BatimentsComponent } from './batiments/batiments.component';
import { UpdateBatimentComponent } from './batiments/update-batiment/update-batiment.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path:'clients' ,component: ClientsComponent},
  {path:'batiments' ,component: BatimentsComponent},

  {path :"add", component:AddBatimentComponent},
  {path :"update/:id", component:UpdateBatimentComponent},
  {path:'client/:id',component:ClientsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
