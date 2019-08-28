import {Injectable} from '@angular/core';
import contract from 'truffle-contract';
import {Subject} from 'rxjs';
declare let require: any;
import { Web3Service } from './web3.service';
import { ok } from 'assert';


declare let window: any;

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class RccService {
  
  public associatedList: string[];
  public associatedTable: Array<any>;

  
  
  constructor(private web3Service: Web3Service) {    
  }

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

  async getBalance(address:string) {
       
    console.log('Initiating transaction... (please wait)');
    try {      
      const rccBalance = await this.web3Service.deployedRcc.balanceOf.call(address);
      console.log('Found balance: ' + rccBalance);
      return rccBalance;     
    } catch (e) {
      console.log(e);      
    }
  }

}
