import {Injectable} from '@angular/core';
//import contract from 'truffle-contract';
//import {Subject} from 'rxjs';
declare let require: any;
import { Web3Service } from './web3.service';

//import { ok } from 'assert';

const rccDao_truffle_contract_ganache = require('../../assets/contracts_ganache/RccDao.json');

declare let window: any;

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class RccDaoService {

  public web3: any;
  
  public associatedList: Array<any>;
  public associatedTable: Array<any>;
  public approveList: Array<any>;
  
  contractRccDao: any;

  constructor(private web3Service: Web3Service) {        
  }

  public init(){
    if (this.web3Service.ready) {
      this.contractRccDao = this.web3Service.getContract(rccDao_truffle_contract_ganache);      
    }
  }

  public async getAssociatedList() {
    if (this.contractRccDao){    
      this.associatedList = new Array<any>();
      console.log('Sending getAssociatedList transaction... (please wait)');
      try {
        this.associatedList = await this.contractRccDao.methods.getAssociatedList().call().then(function(receipt){                    
          console.log("associatedList: " + receipt)          
          return receipt;
        });            
      } catch (e) {
        console.log(e);      
      }
    }    
  }

  /*
  public async getAssociatedList() {    
    this.associatedList = new Array();
    console.log('Initiating transaction... (please wait)');
    try {
      if (this.web3Service){
        if (this.web3Service.deployedRccDao){
          this.associatedList = await this.web3Service.deployedRccDao.getAssociatedList.call();            
          console.log(this.associatedList);       
        }
      }
      
    } catch (e) {
      console.log(e);      
    }
  }
  */

  public async getAssociated(address) {
        
    let associated:any;

    return this.web3Service.getBalance(address).then((balance) => {
      if (this.contractRccDao){
        try {     
          return this.contractRccDao.methods.getAssociated(address).call().then(function(receipt){
            associated = receipt;       
            console.log(associated);        
            associated.address = address;
            associated.balance = balance;
            associated.name = associated.name;
            associated.ref = associated.ref;      
            associated.enabled = associated.enabled;      
            associated.minter = associated.minter;             
            return associated;
          });  
        } catch (e) {
          console.log(e);      
        }
      }
      
    })

    
  }

  /*
  public async getAssociated(address) {
        
    let associated:any;
    console.log('Initiating transaction... (please wait)');
    try {      
      if (this.web3Service){
        if (this.web3Service.deployedRccDao){
          associated = await this.web3Service.deployedRccDao.getAssociated.call(address);      
          console.log(associated);        
          associated.address = address;
          associated.balance = await this.web3Service.deployedRcc.balanceOf.call(address);
          associated.name = associated.name;
          associated.ref = associated.ref;      
          associated.enabled = associated.enabled;      
          associated.minter = associated.minter;  
        }
      }          
    } catch (e) {
      console.log(e);      
    }
    return associated;
  }
  */

  public async getAssociatedTable() {              
    try {      
      console.log("getting Associated Table");
      //this.associatedTable = new Array<any>();  
      this.associatedTable = new Array<any>();  

      this.getAssociatedList().then( () =>{            
        this.associatedList.forEach(associated_address => {          
            this.getAssociated(associated_address).then((associated) =>
            {
              this.associatedTable.push(associated);
              console.log("Asociado: " + JSON.stringify(associated));
            })
        })
      });
      
    } catch (e) {
      console.log(e);      
    }    
  }

  public getContractAddress(){
    return rccDao_truffle_contract_ganache.networks["5777"].address;
  }

  /*
  public async activate() {       
    let result:string;
    console.log('Initiating transaction... (please wait)');
    try {  
      if (this.web3Service){
        if (this.web3Service.deployedRccDao){    
          const activate = await this.web3Service.deployedRcc.isActivate.call();  
          alert(activate)        
          if (!activate){
            const transaction = await this.web3Service.deployedRcc.activate.sendTransaction(this.web3Service.deployedRccDao.address, {from: this.web3Service.default_account.account});
            if (!transaction) {        
              console.log('Transaction failed!');
              result = 'KO';
            } else {       
              console.log('Transaction complete!');          
              result = 'OK';
            }
            return result;          
          }
        }
      }

    } catch (e) {
      console.log(e); 
      result = 'KO';    
      return result;
    }    
  }
  */

  /*
  public async newAssociated(address, name, ref) {   
    let result:string = null;
    console.log('Initiating transaction... (please wait)');
    try {      
      if (this.web3Service){
        if (this.web3Service.deployedRccDao){
          const transaction = await this.web3Service.deployedRccDao.newAssociated.sendTransaction(address, name, ref, true,  {from: this.web3Service.default_account.account});          
          if (!transaction) {        
            console.log('Transaction failed!');
            result = 'KO';
          } else {       
            console.log('Transaction complete!');          
            result = 'OK';
          }
          return result;
        }
      }      

    } catch (e) {
      console.log(e); 
      result = 'KO';    
      return result;
    }        
  }
  */

  public async newAssociated(address, name, ref) {  
    
    let result:string;
    console.log('sending newAssociated transaction transaction... (please wait)');
    try {      

      return this.contractRccDao.methods.newAssociated(address, name, ref, true).send({from: this.web3Service.default_account.account, gas:'1200000', gasPrice: '20000000000' })
        .then(function(receipt){
          console.log("Transaction complete. Return: " + JSON.stringify(receipt))
          return 'OK';
          })
        .catch(function(error){
          console.log("Transaction failed. Error: " + error)
          return 'KO';
          });

    } catch (e) {
      console.log(e);    
      return 'KO';    
      
    }    
           
  }

  /*
  public async ask(address: string, amount: number, message: string) {   
    let result:string;
    console.log('Initiating transaction... (please wait)');
    try {   
      if (this.web3Service){
        if (this.web3Service.deployedRccDao){             
          const transaction = await this.web3Service.deployedRccDao.ask.sendTransaction(1,address, amount, message, {from: this.web3Service.default_account.account});
          //const transaction = await this.web3Service.deployedRccDao.methods.ask(1,address, amount, message).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' });
          alert(JSON.stringify(transaction))
          if (!transaction) {        
            console.log('Transaction failed!');
            result = 'KO';
          } else {       
            console.log('Transaction complete!');          
            result = 'OK';
          }
          return result;
        }
      }

    } catch (e) {
      console.log(e); 
      result = 'KO';    
      return result;
    }
    
  }
  */

  public async ask(address: string, amount: number, message: string) {   

    let result:string;
    console.log('sending ask transaction transaction... (please wait)');
    try {      

      return this.contractRccDao.methods.ask(1,address, amount, message).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
     .then(function(receipt){
       console.log("Transaction complete. Return: " + JSON.stringify(receipt))
       return 'OK';
      })
     .catch(function(error){
       console.log("Transaction failed. Error: " + error)
       return 'KO';
      });

    } catch (e) {
      console.log(e);    
      return 'KO';    
      
    }     
}

  public async approve(id: number, address: string, amount: number, message: string) {   
    
    let result:string;
    console.log('sending approve transaction transaction... (please wait)');
    try {      

    return this.contractRccDao.methods.approve(id,address, amount, message).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
     .then(function(receipt){
       console.log("Transaction complete. Return: " + JSON.stringify(receipt))
       return 'OK';
      })
     .catch(function(error){
       console.log("Transaction failed. Error: " + error)
       return 'KO';
      });

    } catch (e) {
      console.log(e);    
      return 'KO';    
      
    }
    
  }


  public async check(address: string) {  
    
    this.approveList = new Array<any>();      
    let result:string;
    console.log('sending transaction transaction... (please wait)');
    try {      

      this.contractRccDao.getPastEvents('Ask', { filter:  {address: address}, fromBlock: 0, toBlock: 'latest' }, (error, events) => { 
        console.log("------EVENTOS: " + JSON.stringify(events));            
        if (events){
          events.forEach(element => {
            this.approveList.push({address:element.returnValues.ask_address, id:element.returnValues.id, amount:element.returnValues.amount, message:element.returnValues.message})  
            console.log(JSON.stringify(this.approveList))
          });                   
          result = 'OK';
        }
          
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
