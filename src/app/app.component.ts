import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionService } from './gestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontTest';
  clients:any=[]
  c:any
  id:any

  constructor(private ser:GestionService,private route:Router,private ac:ActivatedRoute) {}

    ngOnInit(): void {

      this.ac.paramMap.subscribe((params:ParamMap)=> {
        this.id= params.get('c.id');


      })

      this.ser.getClients().subscribe(
        (data)=>{this.clients=data},

      erreur=>{}
      )

  }




}
