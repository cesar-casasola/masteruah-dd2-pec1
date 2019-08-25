import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

import { RccDaoService } from '../../util/rccDao.service';
import { RccService } from '../../util/rcc.service';
import { Web3Service } from '../../util/web3.service';

@Component({
  selector: 'app-rcc-review',
  templateUrl: './rcc.component.html',
  styleUrls: ['./rcc.component.css']
})
export class RccComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccService: RccService,
    public rccDaoService: RccDaoService,
    private web3Service: Web3Service) { }    
      
  @Input() public rcc: any;
  @Input() public mode: string;

  rccForm: FormGroup;

  ngOnInit() {        
    this.rccForm = new FormGroup(
      {
        address: new FormControl(''),
        address_wallet: new FormControl(''),
        address_associated: new FormControl(''),
        amount: new FormControl(''),
      }
    )
    this.rccDaoService.getAssociatedList();
  }
 
  send(){    
    this.rccService.sendRCC(this.rcc.address, this.rcc.amount)
    .then(
      result => {                          
        if (result == "OK"){                                
          this.activeModal.close('OK');
        }
      },
      err => console.log(err)      
    )
  }  

  mint(){    
    this.rccService.mintRCC(this.rcc.address, this.rcc.amount)
    .then(
      result => {                          
        if (result == "OK"){                                
          this.activeModal.close('OK');
        }
      },
      err => console.log(err)      
    )
  }  

  closeModal() {
    this.activeModal.close('KO');
  } 

}
