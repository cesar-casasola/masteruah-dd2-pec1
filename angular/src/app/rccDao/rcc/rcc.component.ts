import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RccDaoService } from '../../services/rccDao.service';
import { RccService } from '../../services/rcc.service';
import { Web3Service } from '../../services/web3.service';

@Component({
  selector: 'app-rcc',
  templateUrl: './rcc.component.html',
  styleUrls: ['./rcc.component.css']
})
export class RccComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccService: RccService,
    public rccDaoService: RccDaoService,
    private matSnackBar: MatSnackBar,
    private web3Service: Web3Service) { }    
      
  @Input() public rcc: any;
  @Input() public mode: string;

  transaction_result: string

  rccForm: FormGroup;

  ngOnInit() {     
    this.rccForm = new FormGroup(
      {
        address: new FormControl(''),
        address_wallet: new FormControl(''),
        address_associated: new FormControl(''),
        amount: new FormControl(''),
        balance: new FormControl('')
      }
    )
    this.rccDaoService.getAssociatedList();
    this.getBalance();
  }
 
  send(){    
    this.rccService.sendRCC(this.rcc.address, this.rcc.amount)
    .then(
      result => {                          
        if (result == "OK"){                 
          this.setStatus("Envío de RCC con éxito");
          this.getBalance();
        }
        else{
          this.setStatus("No se ha podido llevar a cabo el envío de RCC");
        }
      },
      err => {
        console.log(err)
        this.setStatus("No se ha podido llevar a cabo el envío de RCC");
      }
    )
  }  

  mint(){        
    this.rccService.mintRCC(this.rcc.address, this.rcc.amount)
    .then(
      result => {                          
        if (result == "OK"){                                
          this.setStatus("Envío de RCC con éxito");
          this.rccDaoService.getAssociatedTable();
          this.getBalance();
        }
        else{
          this.setStatus("No se ha podido llevar a cabo el envío de RCC");
        }
      },
      err => {
        console.log(err)
        this.setStatus("No se ha podido llevar a cabo el envío de RCC");
      }

    )
  }  

  getBalance(){  
    if (this.rcc.address){
      this.rccService.getBalance(this.rcc.address)
      .then(        
        result => {                   
          this.rcc.balance = result;
        },
        err => {
          console.log(err)
          this.activeModal.close('KO');
        }
      )
    }
    
  }  

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  closeModal() {
    this.activeModal.close('KO');
  } 

}
