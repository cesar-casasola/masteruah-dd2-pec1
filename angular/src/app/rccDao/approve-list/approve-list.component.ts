import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RccDaoService } from '../../services/rccDao.service';

@Component({
  selector: 'app-approve-list',
  templateUrl: './approve-list.component.html',
  styleUrls: ['./approve-list.component.css']
})
export class ApproveListComponent implements OnInit {

  selectedRow: number;
  approve_selected: any;

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccDaoService: RccDaoService,
    private matSnackBar: MatSnackBar) { }    
      
  @Input() public account: any;  

  ngOnInit() {  
    this.rccDaoService.check(this.account)
    .then(
      result => {                          
        if (result == "OK"){                                          
          this.setStatus("Se ha realizado una petición de Token");
        }
      },
      err => console.log(err)      
    )
  } 

  selectAddress(approveElement){
    this.activeModal.close(approveElement);
    this.setStatus("Se ha realizado una petición de Token");       
  } 

  select(index, approveElement) {                
    if (this.selectedRow == index){
      this.selectedRow = -1;      
    }
    else{
      this.selectedRow = index;
      this.approve_selected = approveElement;
    }    
  }

  closeModal() {
    this.activeModal.close('KO');
  } 

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }


}
