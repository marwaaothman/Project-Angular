
import { Batiment } from './../models/batiment';
import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
id : any;
closeResult: string;
  constructor(private ser:GestionService, private activatedRoute:ActivatedRoute,private route:Router ,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      this.id=params.get("id")
      this.getBatimentByClient(this.id)
    })


  }


  getBatimentByClient(id:number){
    this.ser.getBatimentByClient(this.id).subscribe(
      data=>{this.batiments=data},
      err=>{}
    )
  }


/*this.formValue=this.formbuilder.group({
  _id:[''],
  address:[''],
  city:[''],
  postalCode: [''],
  client: [''],
})
this.getAllBatiments();*/



addBatiment(){


  this.ser.addBatiment(this.batiment).subscribe(
    data=>{
      this.toastr.success('added successfuly!!');
      let ref =document.getElementById('cancel')

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

  updateBatiment() :void{
    this.batiment.address=this.formValue.value.address;
    this.batiment.city=this.formValue.value.city;
    this.batiment.postalCode=this.formValue.value.postalCode;
    this.batiment.client=this.formValue.value.client;

   /* this.ser.updateBatiment(this.currentBatiment.batimentId,this.currentBatiment)
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
            });*/
  }



open(content) {
this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
}

private getDismissReason(reason: any): string {
if (reason === ModalDismissReasons.ESC) {
  return 'by pressing ESC';
} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  return 'by clicking on a backdrop';
} else {
  return `with: ${reason}`;
}
}
}
