import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AskListComponent } from '../ask-list/ask-list.component';

import { RccDaoService } from '../../services/rccDao.service';
import { Web3Service } from '../../services/web3.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccDaoService: RccDaoService,
    private web3Service: Web3Service,
    private matSnackBar: MatSnackBar) { }    
      
  @Input() public ask: any;
  @Input() public mode: string;

  
  approveForm: FormGroup;

  ngOnInit() {      
    
    this.approveForm = new FormGroup(
      {
        account: new FormControl(''),
        address: new FormControl(''),
        id: new FormControl(''),
        amount: new FormControl(''),
        message: new FormControl(''),        
      }
    )
  }

  public approve(){        
    this.rccDaoService.approve(this.ask.id, this.ask.address, this.ask.amount, this.ask.message)
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

  public check(){        
    const modalRef = this.modalService.open(AskListComponent,{ size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.account = this.web3Service.default_account.account;     
    modalRef.result.then((result) => {             
      if (result){         
        this.ask.id = result.id;
        this.ask.address = result.address;
        this.ask.amount = result.amount;
        this.ask.message = result.message;                       
      }
    }).catch((error) =>{      
    });                      
  }

  closeModal() {
    this.activeModal.close('KO');
  } 

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }


}
