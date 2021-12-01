
import { Batiment } from './../models/batiment';
import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batiments',
  templateUrl: './batiments.component.html',
  styleUrls: ['./batiments.component.css']
})
export class BatimentsComponent implements OnInit {
batiments: Batiment[];
currentBatiment = new Batiment();
batiment =new  Batiment();
formValue !:FormGroup;
  constructor(private ser:GestionService,private route:Router ,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.ser.getBatiments().subscribe(data=>{
      this.batiments=data;
    }

    )
  /*this.formValue=this.formbuilder.group({
    _id:[''],
    address:[''],
    city:[''],
    postalCode: [''],
    client: [''],
  })
  this.getAllBatiments();*/
  }


  getAllBatiments(){
  this.ser.getBatiments().subscribe(data=>{
    this.batiments=data;
  }

  )}
  addBatiment(){
  this.batiment.address=this.formValue.value.address;
  this.batiment.city=this.formValue.value.city;
  this.batiment.postalCode=this.formValue.value.postalCode;
  this.batiment.Client=this.formValue.value.Client;


    this.ser.addBatiment(this.batiment).subscribe(
      data=>{
        this.toastr.success('added successfuly!!');
        let ref =document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.ngOnInit()

      },
      err=>{}
    )
    };


    delete(id:number){
      this.ser.delete(id).subscribe(
        data=> {
          this.toastr.error('Batiment supprimé!!');
          this.ngOnInit()  },
        err => {  }
      )
    }

    onEdit(batiment:any){
      this.currentBatiment.batimentId=batiment.batimentId;
      this.formValue.controls['address'].setValue(batiment.address);
      this.formValue.controls['city'].setValue(batiment.city);
      this.formValue.controls['postalCode'].setValue(batiment.postalCode);

    }
/*
    updateBatiment() :void{
      this.batiment.address=this.formValue.value.address;
      this.batiment.city=this.formValue.value.city;
      this.batiment.postalCode=this.formValue.value.postalCode;
      this.batiment.Client=this.formValue.value.Client;

      this.ser.updateBatiment(this.currentBatiment._id,this.currentBatiment)
            .subscribe(
              response => {
                console.log(response);
                this.toastr.info('Batiment was updated successfully!');
                let ref =document.getElementById('cancel')
               ref?.click();
                this.ngOnInit() ;
              },
              error => {
                console.log(error);
              });
    }


*/
  }
