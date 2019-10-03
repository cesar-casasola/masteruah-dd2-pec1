import {Injectable} from '@angular/core';
//import contract from 'truffle-contract';
//import {Subject} from 'rxjs';
declare let require: any;
import { Web3Service } from './web3.service';
import { RccService } from './rcc.service';



const rccDao_truffle_ganache_contract = require('../../assets/contracts_ganache/RccDao.json');
const rccDao_truffle_rinkeby_contract = require('../../assets/contracts_rinkeby/RccDao.json');

declare let window: any;

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class RccDaoService {

  public _pause: boolean = false;

  public web3: any;
  
  public associatedList: Array<any>;
  public associatedTable: Array<any>;
  public approveList: Array<any>;
  public askList: Array<any>;
  
  contractRccDao: any;

  constructor(private web3Service: Web3Service, private rccService: RccService) {        
  }

  public init(){

    if (this.web3Service.ready) {
      if (this.web3Service.provider == "URL"){
        this.contractRccDao = this.web3Service.getContract(rccDao_truffle_ganache_contract);
      }
      if (this.web3Service.provider == "Metamask"){
        this.contractRccDao = this.web3Service.getContract(rccDao_truffle_rinkeby_contract);
      }
    }    
  }

  public getContractAddress(){
    if (this.web3Service.provider == "URL"){
      return rccDao_truffle_ganache_contract.networks[this.web3Service.networkId].address;
    }
    if (this.web3Service.provider == "Metamask"){
      return rccDao_truffle_rinkeby_contract.networks[this.web3Service.networkId].address;
    }
  }

  updatePaused(){      
    this.paused()
    .then(
      result => {              
        this._pause = result;          
      },
      err => {
        console.log(err)      
      }
    )
  }

  public async getAssociatedList() {    
    if (this.contractRccDao){    
      this.associatedList = new Array<any>();
      console.log('Sending getAssociatedList call... (please wait)');
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

  public async getAssociated(address) {
        
    let associated:any;

    return this.rccService.getBalance(address).then((balance) => {
      if (this.contractRccDao){
        try {     
          console.log('Sending getAssociated call... (please wait)');
          return this.contractRccDao.methods.getAssociated(address).call().then(function(receipt){
            console.log("getAssociated: " + receipt)    
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
  
  public async getAssociatedTable() {              
    try {      
      console.log("getting Associated Table");      
      this.associatedTable = new Array<any>();  

      console.log("------getAssociatedTable. contractRccDao:  " + this.contractRccDao._address)    
      console.log("------getAssociatedTable. contractAddress:  " + this.getContractAddress())    
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
  
  public async newAssociated(address, name, ref) {  
    
    let result:string;
    console.log('sending newAssociated transaction... (please wait)');
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

  public async enableAssociated(address) {  
    
    if (this.web3Service.ready){
      console.log('sending enableAssociated transaction... (please wait)');
      try {      

        return this.contractRccDao.methods.enableAssociated(address).send({from: this.web3Service.default_account.account, gas:'1200000', gasPrice: '20000000000' })
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
           
  }

  public async disableAssociated(address) {  
    
    if (this.web3Service.ready){
      console.log('sending disableAssociated transaction... (please wait)');
      try {      

        return this.contractRccDao.methods.disableAssociated(address).send({from: this.web3Service.default_account.account, gas:'1200000', gasPrice: '20000000000' })
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
           
  }


  public async pause() {  
        
    if (this.web3Service.ready){
      console.log('sending pause transaction... (please wait)');
      try {      

        return this.contractRccDao.methods.pause().send({from: this.web3Service.default_account.account, gas:'1200000', gasPrice: '20000000000' })
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
           
  }

  public async paused() {      
    if (this.web3Service.ready){
      console.log('sending paused call... (please wait)');
      try {
        return this.contractRccDao.methods.paused().call().then(function(receipt){                              
          console.log("paused: " + receipt)          
          return receipt;
        });            
      } catch (e) {
        console.log(e);      
      }
    }
           
  }

  public async unpause() {  
    
    if (this.web3Service.ready){
      console.log('sending unpause transaction... (please wait)');
      try {      

        return this.contractRccDao.methods.unpause().send({from: this.web3Service.default_account.account, gas:'1200000', gasPrice: '20000000000' })
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
           
  }


  public async ask(address: string, amount: number, message: string) {   

    let result:string;
    console.log('sending ask transaction... (please wait)');
    try {      

      return this.contractRccDao.methods.ask(address, amount, message).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
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
    console.log('sending approve transaction... (please wait)');
    try {      

    return this.contractRccDao.methods.approve(id, address, amount, message).send({from: this.web3Service.default_account.account, gasPrice: '20000000000' })
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

  public checkApproveEvent(id){    
    let check = false;
    this.approveList.forEach(approve => {
      if (approve.id == id){
        check = true;
      }
    })
    return check;
  }

  public async check(address: string) {  
    
    this.approveList = new Array<any>();      
    this.askList = new Array<any>();      

    let result:string;
    console.log('sending check transaction... (please wait)');
    try {          
      this.contractRccDao.getPastEvents('Approve', { filter:  {associatted_address: address}, fromBlock: 0, toBlock: 'latest' }, (error, aproveEvents) => { 
        //console.log("------EVENTOS: " + JSON.stringify(aproveEvents));            
        if (aproveEvents){
          
          aproveEvents.forEach(element => {
            this.approveList.push({address:element.returnValues.ask_address, id:element.returnValues.id, amount:element.returnValues.amount, message:element.returnValues.message})  
            //console.log("approveList: " + JSON.stringify(this.approveList))
          });                             
          this.contractRccDao.getPastEvents('Ask', { filter:  {associatted_address: address}, fromBlock: 0, toBlock: 'latest' }, (error, askEvents) => { 
            //console.log("------EVENTOS: " + JSON.stringify(askEvents));                        
            if (askEvents){              

              askEvents.forEach(element => {                
                if (!this.checkApproveEvent(element.returnValues.id)){
                  this.askList.push({address:element.returnValues.ask_address, id:element.returnValues.id, amount:element.returnValues.amount, message:element.returnValues.message})  
                  //console.log("askList. "  + JSON.stringify(this.askList))
                }
              });                   
              result = 'OK';
            }
              
          })

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
