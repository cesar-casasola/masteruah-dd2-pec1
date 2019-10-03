import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

declare let require: any;
const Web3 = require('web3');

declare let window: any;

const testRcc_truffle_contract = require('../../assets/contracts/TestRCC.json');

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class Web3Service {

  public web3: any;
  public accounts: string[];
  public ready = false;
  public bootstrap = false;

  public networkId = ""

  default_account = {
    amount: 0,    
    balance: 0,
    account: ''
  };

  public provider = "Metamask"
  public provider_url = "http://localhost:7545"

  public accountsObservable = new Subject<string[]>();

  constructor(        
  ) {
    window.addEventListener('load', (event) => {      
      this.bootstrapWeb3();            
    });
  }

  public bootstrapWeb3() {    
    this.ready = false;  
    this.web3 = null;
    this.accounts = null;

    this.default_account = {
      amount: 0,      
      balance: 0,
      account: ''
    };
    
    try{      
            
      
      if(this.provider == "Metamask"){   
        console.log('Web3 Detected: ' + window.web3.currentProvider)
        //this.web3 = new Web3(window.web3.currentProvider);   

        this.web3 = new Web3(window.ethereum);
        window.ethereum.enable(); // get permission to access accounts

        console.log("isMetaMask: " + this.web3.currentProvider.isMetaMask)
        if (this.web3.currentProvider.isMetaMask){
          if (typeof this.web3.eth.defaultAccount === 'undefined') {
            console.log( "Your browser does not support Ethereum Ðapps");
          }
          else{
            console.log("defaultAccount: " + JSON.stringify(this.web3.eth.defaultAccount))
            console.log("window.web3.eth.defaultAccount: " + JSON.stringify(window.web3.eth.defaultAccount))
          }          
        }            
        this.web3.eth.net.getId((id)=>{
          console.log(id)
        });
        this.networkId = "4";        
        console.log(this.web3)             
      }
      else if(this.provider == "URL"){        
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.provider_url));              
        this.web3.eth.net.getId((id)=>{
          console.log(id)
        });
        this.networkId = "5777";        
        console.log(this.web3)         

        //this.TestRccDao();
      }
    }
    catch(err){
      console.log(err)      
      this.web3 = null;
    }
      
    setInterval(() => this.refreshAccounts(), 2000);
  }

  public getContract(contract: any){    
    if (this.web3){
      var contract = new this.web3.eth.Contract(contract.abi, contract.networks[this.networkId].address,        
        {from: this.default_account.account, gasPrice: '20000000000'}
      );   
      return contract;      
    }
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

  public async getBalance(address:string){
    return this.web3.eth.getBalance(address).then((balance) => {
      console.log('Balance: ' + balance);
      return balance;    
    });
  }
   
      
    public TestRccDao(){      
      console.log("Contrato:")
      console.log("ABI: "  + JSON.stringify(testRcc_truffle_contract.abi))

      let address = JSON.stringify(testRcc_truffle_contract.networks[this.networkId].address);
      console.log("Contract Address: "  + address);

      var contractTestRcc = new this.web3.eth.Contract(testRcc_truffle_contract.abi, testRcc_truffle_contract.networks[this.networkId].address,
        {from: '0xb253e4fCe8122904072a7EcB464030A0C141D064', gasPrice: '20000000000'}
      );            
      this.web3.eth.getBalance('0xb253e4fCe8122904072a7EcB464030A0C141D064').then((balance) => {console.log("balance: " + balance)});

      console.log("Methods: " + JSON.stringify(contractTestRcc.methods))
            
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
