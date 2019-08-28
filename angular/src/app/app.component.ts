import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from './services/web3.service';
import { RccDaoService } from './services/rccDao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(public web3Service: Web3Service, public rccDaoService: RccDaoService) { }    

  async updateProvider(){
    this.web3Service.bootstrapWeb3();               
    await this.web3Service.getDeployedRccContract();    
    await this.web3Service.getDeployedRccDaoContract();
    await this.web3Service.refreshAccounts();
    await this.rccDaoService.getAssociatedTable();      
  }
}
