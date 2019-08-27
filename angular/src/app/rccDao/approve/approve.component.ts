import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RccDaoService } from '../../services/rccDao.service';

@Component({
  selector: 'app-approve-review',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccDaoService: RccDaoService,
    private matSnackBar: MatSnackBar) { }    
      
  @Input() public approve: any;
  @Input() public mode: string;

  

  approveForm: FormGroup;

  ngOnInit() {  
    this.approveForm = new FormGroup(
      {
        address: new FormControl(''),
        id: new FormControl(''),
        amount: new FormControl(''),
        message: new FormControl(''),        
      }
    )
  }

  _approve(){        
    this.rccDaoService.approve(this.approve.id, this.approve.address, this.approve.amount, this.approve.message)
    .then(
      result => {                          
        if (result == "OK"){                                
          this.activeModal.close('OK');
          this.setStatus("Se ha realizado una petición de Token");
        }
      },
      err => console.log(err)      
    )
  }  

  check(){        
    this.rccDaoService.check(this.approve.id, this.approve.address)
    .then(
      result => {                          
        if (result == "OK"){                                          
          this.setStatus("Se ha realizado una petición de Token");
        }
      },
      err => console.log(err)      
    )
  } 

  closeModal() {
    this.activeModal.close('KO');
  } 

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }


}
