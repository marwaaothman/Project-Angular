import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
batiments : any=[];
  constructor(private ser:GestionService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ser.getBatiments().subscribe(data=>{
      this.batiments=data},
      err=>{}
    )
    }
    delete(id:number){
      this.ser.delete(id).subscribe(
        data=> {
          this.toastr.error('Batiment supprimé!!');
          this.ngOnInit()  },
        err => {  }
      )
    }
  }


