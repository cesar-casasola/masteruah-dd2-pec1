import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from './services/web3.service';
import { RccDaoService } from './services/rccDao.service';
import { RccService } from './services/rcc.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(public web3Service: Web3Service, 
    public rccDaoService: RccDaoService, 
    public rccService: RccService,
    private matSnackBar: MatSnackBar) { }    

  async updateProvider(){
    this.web3Service.bootstrapWeb3();                   
    await this.web3Service.refreshAccounts();   
    if (this.web3Service.ready){       
      this.rccDaoService.init();    
      this.rccService.init();   
      this.rccService.activateRcc(this.rccDaoService.getContractAddress())
      await this.rccDaoService.getAssociatedTable();          
    }
    
 }

 ngOnInit() {     
  this.updatePaused()
 }

  async updateAccount(){
       
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

  textPause(){
    if (this.rccDaoService._pause) return "Unpause"
    else return "Pause"
  }

  updatePaused(){      
      return this.rccDaoService.paused()
      .then(
        result => {              
          this.rccDaoService._pause = result;          
        },
        err => {
          console.log(err)
          this.setStatus("No se ha podido leer el estado paused");
        }

      )
    }

  pause(){
    if (this.rccDaoService._pause){
      this.rccDaoService.unpause()
      .then(
        result => {                          
          if (result == "OK"){  
            this.updatePaused();                                                      
          }
          else{
            this.setStatus("No se ha podido llevar continuar (unpause)");
          }
        },
        err => {
          console.log(err)
          this.setStatus("No se ha podido llevar continuar (unpause)");
        }

      )
    }
    if (!this.rccDaoService._pause){
      this.rccDaoService.pause()
      .then(
        result => {                          
          if (result == "OK"){                                                        
          }
          else{
            this.setStatus("No se ha podido para (pause)");
          }
        },
        err => {
          console.log(err)
          this.setStatus("No se ha podido parar (pause)");
        }

      )
    }
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }
}
