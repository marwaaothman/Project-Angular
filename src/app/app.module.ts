import { ListeComponent } from './liste/liste.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ClientsComponent } from './clients/clients.component';
import { BatimentsComponent } from './batiments/batiments.component';
import { GestionService } from './gestion.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastNoAnimationModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    BatimentsComponent,
    ListeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    NgbModule

  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
