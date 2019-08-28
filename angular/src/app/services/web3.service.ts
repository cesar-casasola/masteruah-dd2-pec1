import {Injectable} from '@angular/core';
import contract from 'truffle-contract';
import {Subject} from 'rxjs';
declare let require: any;
const Web3 = require('web3');


declare let window: any;

const rccDao_truffle_contract = require('../../assets/contracts/RccDao.json');
const rcc_truffle_contract = require('../../assets/contracts/RCC.json');

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class Web3Service {

  private web3: any;
  public accounts: string[];
  public ready = false;

  rcc_contract: any;
  deployedRcc: any;

  rccDao_contract: any;
  deployedRccDao: any;

  default_account = {
    amount: 0,    
    balance: 0,
    account: ''
  };

  public provider = "URL"
  public provider_url = "http://localhost:7545"

  public accountsObservable = new Subject<string[]>();

  constructor() {
    window.addEventListener('load', (event) => {
      this.bootstrapWeb3();      
      this.getDeployedRccContract();
      this.getDeployedRccDaoContract();
    });
  }

  public bootstrapWeb3() {  
    this.web3 = null;
    this.rcc_contract = null;
    this.deployedRcc = null;
    this.rccDao_contract = null;
    this.deployedRccDao = null;

    this.default_account = {
      amount: 0,      
      balance: 0,
      account: ''
    };
    
    try{
      if(this.provider == "Metamask"){      
        this.web3 = new Web3(window.web3.currentProvider);         
      }
      else if(this.provider == "URL"){
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.provider_url));      
      }
    }
    catch{
      this.web3 = null;
    }
  
    console.log(this.web3);
    setInterval(() => this.refreshAccounts(), 500);
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
          this.updateBalance();
        }
  
        this.ready = true;
      });
    }
    
  }

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

  public async getDeployedRccContract() {
      
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
   
  public async getDeployedRccDaoContract() {  

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
}
