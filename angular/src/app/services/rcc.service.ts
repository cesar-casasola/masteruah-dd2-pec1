import {Injectable} from '@angular/core';
//import contract from 'truffle-contract';
//import {Subject} from 'rxjs';
declare let require: any;
import { Web3Service } from './web3.service';
//import { ok } from 'assert';

const rcc_truffle_contract_ganache = require('../../assets/contracts_ganache/RCC.json');

declare let window: any;


@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class RccService {
  
  /*
  public associatedList: string[];
  public associatedTable: Array<any>;
  */

  public contractRcc: any;
  
  constructor(private web3Service: Web3Service) {        
  }

  init(){
    if (this.web3Service.ready) {
      this.contractRcc = this.web3Service.getContract(rcc_truffle_contract_ganache);
    }
  }


  public async sendRCC(address:string, amount:number) {
    let result:string;
    console.log('sending transaction transaction... (please wait)');
    try {      

      return this.contractRcc.methods.transfer(address, amount).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
     .then(function(receipt){
       console.log("Transaction complete. Return transfer: " + JSON.stringify(receipt))
       return 'OK';
      })
     .catch(function(error){
       console.log("Transaction failed. Error transfer: " + error)
       return 'KO';
      });

    } catch (e) {
      console.log(e);    
      return 'KO';    
      
    }
  
  }

  public async mintRCC(address:string, amount:number) {
    let result:string;
    console.log('sending transaction transaction... (please wait)');
    try {      

      return this.contractRcc.methods.mint(address, amount).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
     .then(function(receipt){
       console.log("Transaction complete. Return mint: " + JSON.stringify(receipt))
       return 'OK';
      })
     .catch(function(error){
       console.log("Transaction failed. Error mint: " + error)
       return 'KO';
      });

    } catch (e) {
      console.log(e);    
      return 'KO';    
      
    }    
  }

  /*
  public async sendRCC(address:string, amount:number) {
    let result:string;
    console.log('Initiating transaction... (please wait)');
    try {      
      const transaction = await this.web3Service.deployedRcc.transfer.sendTransaction(address, amount, {from: this.web3Service.default_account.account});      
      if (!transaction) {        
        console.log('Transaction failed!');        
        result = 'KO';
      } else {       
        console.log('Transaction complete!');                  
        result = 'OK';
      }

    } catch (e) {
      console.log(e);    
      result = 'KO';    
      
    }

    return result;  
  }
  */

  /*
  public async mintRCC(address:string, amount:number) {
                
    let result:string;
    console.log('Initiating transaction... (please wait)');
    try {      
      const transaction = await this.web3Service.deployedRcc.mint.sendTransaction(address, amount, {from: this.web3Service.default_account.account});
      if (!transaction) {        
        console.log('Transaction failed!');
        result = 'KO';
      } else {       
        console.log('Transaction complete!');          
        result = 'OK';
      }

    } catch (e) {
      console.log(e);    
      result = 'KO';          
    }

    return result;  
  }
  */

  
  async getBalance(address:string) {
       
    console.log('Initiating getBalance transaction... (please wait)');
    try {      
      const rccBalance = await this.contractRcc.methods.balanceOf(address).call();
      console.log('Found balance: ' + rccBalance);
      return rccBalance;     
    } catch (e) {
      console.log(e);      
    }
  }
  

  public getContractAddress(){
    return rcc_truffle_contract_ganache.networks["5777"].address;
  }

  public async activate(rccDaoAddress) {   
          
  if (this.contractRcc){    
    let result:string;
    console.log('sending activate transaction... (please wait)');
    try {      

      this.contractRcc.methods.activate(rccDaoAddress).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
      .then(function(receipt){
        console.log("Transaction complete. Return: " + JSON.stringify(receipt))
        result = 'OK';
        })
      .catch(function(error){
        console.log("Transaction failed. Error: " + error)
        result = 'KO';
        });

      } catch (e) {
        console.log(e);    
        result = 'KO';    
        
      }

      return result;
  }
  
}

}
