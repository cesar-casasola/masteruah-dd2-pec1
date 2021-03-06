import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAssociatedComponent } from '../add-associated/add-associated.component';
import { RccComponent } from '../rcc/rcc.component';
import { AskComponent } from '../ask/ask.component';
import { ApproveComponent } from '../approve/approve.component';

import { RccDaoService } from '../../services/rccDao.service';
import { RccService } from '../../services/rcc.service';
import { Web3Service } from '../../services/web3.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-rccDao',
  templateUrl: './rccDao.component.html',
  styleUrls: ['./rccDao.component.css']
})
export class RccDaoComponent implements OnInit {
    
  selectedRow: number;
  associated_selected: any;
  
  isAlertSuccessDisplayed:boolean = true;
  isAlertFailDisplayed:boolean = true;
  alert_success:string;
  alert_fail:string;
  

  constructor(public rccDaoService: RccDaoService, 
    public rccService: RccService, 
    public web3Service: Web3Service,       
    public modalService: NgbModal,
    private matSnackBar: MatSnackBar) { }    

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
      this.rccDaoService.init();      
      this.rccService.init();      
      this.rccService.activateRcc(this.rccDaoService.getContractAddress())
      this.rccDaoService.getAssociatedTable();
      this.updateAccountBalance();            
    }
  }

  public enableLabel(enable){
    if (enable) 
      return "Disable";
    else
      return "Enable";    
  }
  
  enable(address, enable){
    if (enable){
      this.rccDaoService.disableAssociated(address)
      .then(
        result => {                          
          if (result == "OK"){   
            this.setStatus("Se ha desactivado con Exito la cuenta del Asociado");                                         
            this.rccDaoService.getAssociatedTable();            
          }
          else{
            this.setStatus("No se ha podido desactivar la cuenta del Asociado");
          }
        },
        err => {
          console.log(err)
          this.setStatus("No se ha podido desactivar la cuenta del Asociado");
        }

      )
    }

    if (!enable){
      this.rccDaoService.enableAssociated(address)
      .then(
        result => {                          
          if (result == "OK"){ 
            this.setStatus("Se ha sactivado con Exito la cuenta del Asociado"); 
            this.rccDaoService.getAssociatedTable();            
          }
          else{
            this.setStatus("No se ha podido activar la cuenta del Asociado");
          }
        },
        err => {
          console.log(err)
          this.setStatus("No se ha podido activar la cuenta del Asociado");
        }

      )
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
        this.updateAccountBalance();
      }
    }).catch((error) =>{      
      
    });                      
  }

  public ask(address:string){       
          
    const modalRef = this.modalService.open(AskComponent,{ size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.ask = {address:address, ammount:0, message:""};     
    modalRef.result.then((result) => {             
      if (result == 'OK'){                               
      }
    }).catch((error) =>{      
    });                      
  }

  public approve(){        
    const modalRef = this.modalService.open(ApproveComponent,{ size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.ask = {address:"", id:0, ammount:0, message:""};     
    modalRef.result.then((result) => {             
      if (result == 'OK'){                               
      }
    }).catch((error) =>{      
    });                      
  }

  public updateAccountBalance(){    
    if (this.web3Service.ready){
      this.rccService.getBalance(this.web3Service.default_account.account)
      .then(                
        result => { 
          this.web3Service.default_account.balance = result;          
        },
        err => {
          console.log(err)        
        }
      )
    }
    
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

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }
}