import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBatimentComponent } from './batiments/add-batiment/add-batiment.component';
import { UpdateBatimentComponent } from './batiments/update-batiment/update-batiment.component';

import { ClientsComponent } from './clients/clients.component';
import { BatimentsComponent } from './batiments/batiments.component';
import { GestionService } from './gestion.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastNoAnimationModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AddBatimentComponent,
    UpdateBatimentComponent,
    ClientsComponent,
    BatimentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot()

  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
