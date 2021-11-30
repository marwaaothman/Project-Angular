
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 clients: Client[];
  constructor(private ser : GestionService, private route:Router)  { }

  ngOnInit(): void {
    this.ser.getClients().subscribe(data=>
      {
        console.log(data) ;
       this.clients=data;

      });
  }

}
