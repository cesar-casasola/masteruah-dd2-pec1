import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RccDaoService } from '../../services/rccDao.service';

@Component({
  selector: 'app-ask-list',
  templateUrl: './ask-list.component.html',
  styleUrls: ['./ask-list.component.css']
})
export class AskListComponent implements OnInit {

  selectedRow: number;
  ask_selected: any;

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

  selectAddress(askElement){
    this.activeModal.close(askElement);
    this.setStatus("Se ha realizado una petición de Token");       
  } 

  select(index, askElement) {                
    if (this.selectedRow == index){
      this.selectedRow = -1;      
    }
    else{
      this.selectedRow = index;
      this.ask_selected = askElement;
    }    
  }

  closeModal() {
    this.activeModal.close('KO');
  } 

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }


}
