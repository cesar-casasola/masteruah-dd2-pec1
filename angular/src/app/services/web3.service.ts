import { Injectable } from '@angular/core';
import contract from 'truffle-contract';
import { Subject} from 'rxjs';

import { RccDaoService } from './rccDao.service';
import { RccService } from './rcc.service';

declare let require: any;
const Web3 = require('web3');


declare let window: any;

const rccDao_truffle_contract_rinkeby = require('../../assets/contracts_rinkeby/RccDao.json');
const rcc_truffle_contract_rinkeby = require('../../assets/contracts_rinkeby/RCC.json');

//const rccDao_truffle_contract_ganache = require('../../assets/contracts_ganache/RccDao.json');
//const rcc_truffle_contract_ganache = require('../../assets/contracts_ganache/RCC.json');
const testRcc_truffle_contract_ganache = require('../../assets/contracts_ganache/TestRCC.json');

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class Web3Service {

  public web3: any;
  public accounts: string[];
  public ready = false;

  default_account = {
    amount: 0,    
    balance: 0,
    account: ''
  };

  public provider = "URL"
  public provider_url = "http://localhost:7545"

  public accountsObservable = new Subject<string[]>();

  constructor(        
  ) {
    window.addEventListener('load', (event) => {      
      this.bootstrapWeb3();      
      //this.getDeployedRccContract();
      //this.getDeployedRccDaoContract();
    });
  }

  public bootstrapWeb3() {  
    this.web3 = null;
    
    this.default_account = {
      amount: 0,      
      balance: 0,
      account: ''
    };
    
    try{                  
      if(this.provider == "Metamask"){                      
        this.web3 = new Web3(window.web3.currentProvider);   
        console.log(this.web3)        
      }
      else if(this.provider == "URL"){
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.provider_url));      

        this.TestRccDao();
      }
    }
    catch(err){
      console.log(err)      
      this.web3 = null;
    }
      
    setInterval(() => this.refreshAccounts(), 2000);
  }

  public getContract(contract: any){    
    var contract = new this.web3.eth.Contract(contract.abi, contract.networks["5777"].address,
      {from: '0xb253e4fCe8122904072a7EcB464030A0C141D064', gasPrice: '20000000000'}
    );   
    return contract;      
  }


  public async getToContract(truffle_contract) {
    if (!this.web3) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;
      return await this.getToContract(truffle_contract);
    }
    const contractAbstraction = contract(truffle_contract);
    contractAbstraction.setProvider(this.web3.currentProvider);
    return contractAbstraction;
  }

  public async refreshAccounts() {
    if (this.web3){
      return this.web3.eth.getAccounts((err, accs) => {                
        console.log('Refreshing accounts');
        if (err != null) {                    
          console.warn('There was an error fetching your accounts.');          
          return;
        }
          
        // Get the initial account balance so it can be displayed.
        if (accs.length === 0) {
          console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
          return;
        }
          
        if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
          console.log('Observed new accounts');
  
          this.accountsObservable.next(accs);        
          this.accounts = accs;
          this.default_account.account= this.accounts[0];
          //this.updateBalance();
        }  
  
        this.ready = true;
      });
    }
    
  }

  async updateBalance() {
       
    if (this.web3){
      console.log('Sending getBalance transaction... (please wait)');
      try {        
        this.web3.eth.getBalance(this.default_account.account).then((balance) => {
          console.log('Balance: ' + balance);
          this.default_account.balance = balance;     
        });       
      } catch (e) {
        console.log(e);      
      }
    }
  }

  /*
  async updateBalance() {
       
    console.log('Initiating transaction... (please wait)');
    try {   
      if (this.deployedRcc){
        const rccBalance = await this.deployedRcc.balanceOf.call(this.default_account.account);
        console.log('Found balance: ' + rccBalance);
        this.default_account.balance = rccBalance;   
      }               
    } catch (e) {
      console.log(e);      
    }
  }
  */

  /*  
  public async getDeployedRccContract() {
    
    let rcc_truffle_contract: any;
    if(this.provider == "Metamask")
      rcc_truffle_contract =  rcc_truffle_contract_rinkeby;

    if(this.provider == "URL")
      rcc_truffle_contract =  rcc_truffle_contract_ganache;

    return this.getToContract(rcc_truffle_contract)
      .then((RccAbstraction) => {  
        this.rcc_contract = RccAbstraction;
        return this.rcc_contract.deployed().then(deployed => {          
          this.deployedRcc = deployed;          
          console.log(deployed);            
          return                                      
        });
      }); 
  }    
  */

/*
  public getRccContract() {
    


    let rcc_truffle_contract: any;
    if(this.provider == "Metamask")
      rcc_truffle_contract =  rcc_truffle_contract_rinkeby;

    if(this.provider == "URL")
      rcc_truffle_contract =  rcc_truffle_contract_ganache;

    return this.getToContract(rcc_truffle_contract)
      .then((RccAbstraction) => {  
        this.rcc_contract = RccAbstraction;
        return this.rcc_contract.deployed().then(deployed => {          
          this.deployedRcc = deployed;          
          console.log(deployed);            
          return                                      
        });
      }); 
  }  

  */

  public async getBalance(address:string){
    return this.web3.eth.getBalance(address).then((balance) => {
      console.log('Balance: ' + balance);
      return balance;    
    });
  }
   
  /*
  public async getDeployedRccDaoContract() {  

    let rccDao_truffle_contract: any;
    if(this.provider == "Metamask")
      rccDao_truffle_contract =  rccDao_truffle_contract_rinkeby;

    if(this.provider == "URL")
      rccDao_truffle_contract =  rccDao_truffle_contract_ganache;


    return this.getToContract(rccDao_truffle_contract)
      .then((RccDaoAbstraction) => {
        this.rccDao_contract = RccDaoAbstraction;
        return this.rccDao_contract.deployed().then(deployed => {
          this.deployedRccDao = deployed;          
          console.log(deployed);           
          return     
        });
      }); 
    }    
    */
    
    public TestRccDao(){      
      console.log("Contrato:")
      console.log("ABI: "  + JSON.stringify(testRcc_truffle_contract_ganache.abi))

      let address = JSON.stringify(testRcc_truffle_contract_ganache.networks["5777"].address);
      console.log("Contract Address: "  + address);

      var contractTestRcc = new this.web3.eth.Contract(testRcc_truffle_contract_ganache.abi, testRcc_truffle_contract_ganache.networks["5777"].address,
        {from: '0xb253e4fCe8122904072a7EcB464030A0C141D064', gasPrice: '20000000000'}
      );            
      this.web3.eth.getBalance('0xb253e4fCe8122904072a7EcB464030A0C141D064').then((balance) => {console.log("balance: " + balance)});

      console.log("Methods: " + JSON.stringify(contractTestRcc.methods))
      /*
      contractTestRcc.methods.newAssociated('0x6aC5b3686033A9367e0cc03D892747cc0b1F8181','pepe','pepe',true).send({from: '0xb253e4fCe8122904072a7EcB464030A0C141D064', gasPrice: '20000000000' })
      .then(function(receipt){
          console.log(receipt)
      });
      */
      
     contractTestRcc.methods.getOwner().call().then(function(receipt){console.log("Owner: " + receipt)});
     contractTestRcc.methods.ask(1, '0xb253e4fCe8122904072a7EcB464030A0C141D064', 200, "hola mariola").send({from: '0xb253e4fCe8122904072a7EcB464030A0C141D064', gasPrice: '20000000000' })
     .then(function(receipt){console.log("Return ask: " + JSON.stringify(receipt))})
     .catch(function(error){console.log("Error ask: " + error)});
     contractTestRcc.getPastEvents('Ask', { filter:  {id: '1'}, fromBlock: 0, toBlock: 'latest' }, (error, events) => { console.log("------EVENTOS: " + JSON.stringify(events)); })
      .then((events) => {
          console.log("------EVENTO 0: " + JSON.stringify(events[0].returnValues)) // same results as the optional callback above
      });



    }      
}
