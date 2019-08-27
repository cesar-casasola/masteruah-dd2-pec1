import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RccDaoService } from '../../services/rccDao.service';

@Component({
  selector: 'app-add-associated-review',
  templateUrl: './add-associated.component.html',
  styleUrls: ['./add-associated.component.css']
})
export class AddAssociatedComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccDaoService: RccDaoService,
    private matSnackBar: MatSnackBar) { }    
      
  @Input() public associated: any;
  @Input() public mode: string;

  addAssociated: FormGroup;

  ngOnInit() {  
    this.addAssociated = new FormGroup(
      {
        address: new FormControl(''),
        name: new FormControl(''),
        ref: new FormControl(''),        
      }
    )
  }
 
  add(){
    this.rccDaoService.newAssociated(this.associated.address, this.associated.name, this.associated.ref)
    .then(
      result => {                          
        if (result == "OK"){                                
          this.activeModal.close('OK');
          this.setStatus("Se ha incluido un nuevo asociado");
        }
        else{
          this.activeModal.close('OK');
          this.setStatus("No se ha podido añadir un nuevo asociado");
        }
      },
      err => {
        console.log(err)      
        this.activeModal.close('OK');
        this.setStatus("No se ha podido añadir un nuevo asociado. Error: " + JSON.stringify(err));
      }
    )
  }  

  closeModal() {
    this.activeModal.close('KO');
  } 

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }


}
