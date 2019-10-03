import {Injectable} from '@angular/core';
//import contract from 'truffle-contract';
//import {Subject} from 'rxjs';
declare let require: any;
import { Web3Service } from './web3.service';
//import { ok } from 'assert';

//const rcc_truffle_contract = require('../../assets/contracts/RCC.json');

const rcc_truffle_ganache_contract = require('../../assets/contracts_ganache/RCC.json');
const rcc_truffle_rinkeby_contract = require('../../assets/contracts_rinkeby/RCC.json');
declare let window: any;


@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class RccService {
    
  public contractRcc: any;
  
  constructor(private web3Service: Web3Service) {        
  }

  init(){
    if (this.web3Service.ready) {
      if (this.web3Service.provider == "URL"){
        this.contractRcc = this.web3Service.getContract(rcc_truffle_ganache_contract);
      }
      if (this.web3Service.provider == "Metamask"){
        this.contractRcc = this.web3Service.getContract(rcc_truffle_rinkeby_contract);
      }
    }
  }

  public getContractAddress(){
    if (this.web3Service.provider == "URL"){
      return rcc_truffle_ganache_contract.networks[this.web3Service.networkId].address;
    }
    if (this.web3Service.provider == "Metamask"){
      return rcc_truffle_rinkeby_contract.networks[this.web3Service.networkId].address;
    }    
  }


  public async sendRCC(address:string, amount:number) {
    let result:string;
    console.log('sending transfer transaction... (please wait)');
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
    console.log('sending mint transaction... (please wait)');
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

  activateRcc(address){
    this.isActivate()
      .then(
        result => {                          
          if (!result){   
            this.activate(address);      
            console.log("Se ha activado con éxito el contrato rcc");            
          }
          else{
            console.log("El contrato rcc ya ha sido activada");
          }
        },
        err => {
          console.log(err)
          console.log("Error activando el contrato rcc");
        }

      )
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

  async isActivate() {
       
    console.log('Initiating isActivate transaction... (please wait)');
    try {      
      const activate = await this.contractRcc.methods.isActivate().call();
      console.log('Activate: ' + activate);
      return activate;     
    } catch (e) {
      console.log(e);      
    }
  }

}
