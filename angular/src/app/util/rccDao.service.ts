import {Injectable} from '@angular/core';
import contract from 'truffle-contract';
import {Subject} from 'rxjs';
declare let require: any;
import { Web3Service } from '../util/web3.service';
import { ok } from 'assert';


declare let window: any;

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class RccDaoService {
  
  public associatedList: string[];
  public associatedTable: Array<any>;
  
  constructor(private web3Service: Web3Service) {    
  }

  public async getAssociatedList() {    
    this.associatedList = new Array();
    console.log('Initiating transaction... (please wait)');
    try {
      this.associatedList = await this.web3Service.deployedRccDao.getAssociatedList.call();            
      console.log(this.associatedList);       
    } catch (e) {
      console.log(e);      
    }
  }

  public async getAssociated(address) {
        
    let associated:any;
    console.log('Initiating transaction... (please wait)');
    try {      
      associated = await this.web3Service.deployedRccDao.getAssociated.call(address);      
      console.log(associated);        
      associated.address = address;
      associated.balance = await this.web3Service.deployedRcc.balanceOf.call(address);
      associated.name = associated.name;
      associated.ref = associated.ref;      
      associated.enabled = associated.enabled;      
      associated.minter = associated.minter;      
    } catch (e) {
      console.log(e);      
    }
    return associated;
  }

  public async getAssociatedTable() {       
    try {
      this.associatedTable = new Array<any>();
      this.getAssociatedList().then( () =>{        
        this.associatedList.forEach(associated_address => {
          this.getAssociated(associated_address).then((associated) =>{
            this.associatedTable.push(associated)
          })
        });
      })          
    } catch (e) {
      console.log(e);      
    }    
  }

  public async newAssociated(address, name, ref) {   
    let result:string;
    console.log('Initiating transaction... (please wait)');
    try {      
      const transaction = await this.web3Service.deployedRccDao.newAssociated.sendTransaction(address, name, ref, true, true, {from: this.web3Service.default_account.account});
      if (!transaction) {        
        console.log('Transaction failed!');
        result = 'KO';
      } else {       
        console.log('Transaction complete!');          
        result = 'OK';
      }
      return result;

    } catch (e) {
      console.log(e); 
      result = 'KO';    
      return result;
    }
    
  }
}
