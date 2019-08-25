import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAssociatedComponent } from '../add-associated/add-associated.component';
import { RccComponent } from '../rcc/rcc.component';

import { RccDaoService } from '../../util/rccDao.service';
import { Web3Service } from '../../util/web3.service';

@Component({
  selector: 'app-rccDao',
  templateUrl: './rccDao.component.html',
  styleUrls: ['./rccDao.component.css']
})
export class RccDaoComponent implements OnInit {
    
  selectedRow: number;
  associated_selected: any;

  open:boolean = true;

  constructor(public rccDaoService: RccDaoService, 
    private web3Service: Web3Service,       
    public modalService: NgbModal) { }    

  ngOnInit() {
      this.updateWeb3();      
  }  

  async updateWeb3(){
    if (!this.web3Service.ready){
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;
      this.ngOnInit();
    }
    else{
      this.rccDaoService.getAssociatedTable(); 
      this.web3Service.updateBalance();
    }
  }

  public addAssociated(){              
    const modalRef = this.modalService.open(AddAssociatedComponent,{ size: 'lg', backdrop: 'static'});                 
    modalRef.componentInstance.mode = "add";    
    modalRef.componentInstance.associated = {};    
    modalRef.result.then((result) => {       
      if (result == 'OK'){     
        this.rccDaoService.getAssociatedTable();
        this.selectedRow = -1;   
      }
    }).catch((error) =>{      
    });     
  }

  public rcc(address:string, mode:string){        
    const modalRef = this.modalService.open(RccComponent,{ size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.mode = mode;   
    modalRef.componentInstance.rcc = {address:address, ammount:0};     
    modalRef.result.then((result) => {             
      if (result == 'OK'){                               
      }
    }).catch((error) =>{      
    });                      
  }


  select(index, associated) {                
    if (this.selectedRow == index){
      this.selectedRow = -1;      
    }
    else{
      this.selectedRow = index;
      this.associated_selected = associated;
    }    
  }
}