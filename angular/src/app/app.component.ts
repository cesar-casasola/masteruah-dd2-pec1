import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from './services/web3.service';
import { RccDaoService } from './services/rccDao.service';
import { RccService } from './services/rcc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(public web3Service: Web3Service, public rccDaoService: RccDaoService, public rccService: RccService) { }    

  async updateProvider(){
    this.web3Service.bootstrapWeb3();               
    await this.web3Service.refreshAccounts();
    await this.rccDaoService.getAssociatedTable();      
    
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
}
