import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';

declare let require: any;
const rcc_contract = require('../../../../../truffle/build/contracts/RCC.json');

@Component({
  selector: 'app-rcc',
  templateUrl: './rcc.component.html',
  styleUrls: ['./rcc.component.css']
})
export class RccComponent implements OnInit {

  accounts: string[];
  rcc_contract: any;

  default_account = {
    amount: 0,
    receiver: '',
    balance: 0,
    account: ''
  };

  rcc_account = {
    amount: 0,    
    balance: 0,
    account: ''
  };


  mint_account = {
    amount: 0,    
    balance: 0,
    account: ''
  };

  minter_account = {
    amount: 0,    
    balance: 0,
    account: ''
  };

  balance_account = {
    amount: 0,
    balance: 0,
    account: ''
  };

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.refreshAccount();
    this.web3Service.getToContract(rcc_contract)
      .then((RccAbstraction) => {
        this.rcc_contract = RccAbstraction;
        this.rcc_contract.deployed().then(deployed => {
          console.log(deployed);
          /*
          deployed.Transfer({}, (err, ev) => {
            console.log('Transfer event came in, refreshing balance');
            this.refreshBalance();
          });
          */
        });

      });
  }

  async refreshAccount() {       
    if (!this.web3Service.accounts){        
      this.web3Service.accountsObservable.subscribe((accounts) => {          
        this.accounts = accounts;
        this.default_account.account = this.accounts[0];      
        console.log('Default account: ' + this.default_account.account);        
        this.refreshDefaultAccountBalance();  
      });     
    }else{
      this.accounts = this.web3Service.accounts;
      this.default_account.account = this.accounts[0];  
      console.log('Default account: ' + this.default_account.account);      
      this.refreshDefaultAccountBalance(); 
    }
  }

  async refreshDefaultAccountBalance() {
    console.log('Refreshing balance');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      console.log(deployedRcc);
      console.log('Account', this.default_account.account);
      const rccBalance = await deployedRcc.balanceOf.call(this.default_account.account);
      console.log('Found balance: ' + rccBalance);
      this.default_account.balance = rccBalance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.default_account.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.default_account.receiver = e.target.value;
  }  

  async sendRCC() {
    if (!this.rcc_contract) {
      alert("El contrato rcc no está desplegado")
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.default_account.amount;
    const receiver = this.default_account.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    console.log('Initiating transaction... (please wait)');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      const transaction = await deployedRcc.transfer.sendTransaction(receiver, amount, {from: this.default_account.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
        console.log('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        console.log('Transaction complete!');
        this.refreshDefaultAccountBalance();
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }


  setAddressBalance(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.balance_account.account = e.target.value;
  }

  async getBalance() {
    if (!this.rcc_contract) {
      alert("El contrato rcc no está desplegado")
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.default_account.amount;
    const balance_account = this.balance_account.account;

    console.log('Getting coins of ' + balance_account);

    this.setStatus('Initiating transaction... (please wait)');
    console.log('Initiating transaction... (please wait)');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      const rccBalance = await deployedRcc.balanceOf.call(this.balance_account.account);
      console.log('Found balance: ' + rccBalance);
      this.balance_account.balance = rccBalance;

     
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }



  async sendRCCAccount() {
    if (!this.rcc_contract) {
      alert("El contrato rcc no está desplegado")
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.rcc_account.amount;
    const receiver = this.rcc_account.account;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    console.log('Initiating transaction... (please wait)');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      const transaction = await deployedRcc.transfer.sendTransaction(receiver, amount, {from: this.default_account.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
        console.log('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        console.log('Transaction complete!');
        this.refreshDefaultAccountBalance();
        this.refreshRccBalance();
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  setRccAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.rcc_account.amount = e.target.value;
  }

  async refreshRccBalance() {
    console.log('Refreshing balance');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      console.log(deployedRcc);
      console.log('Account', this.rcc_account.account);
      const rccBalance = await deployedRcc.balanceOf.call(this.rcc_account.account);
      console.log('Found balance: ' + rccBalance);
      this.rcc_account.balance = rccBalance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  async sendMintAccount() {
    if (!this.rcc_contract) {
      alert("El contrato rcc no está desplegado")
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.mint_account.amount;
    const receiver = this.mint_account.account;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    console.log('Initiating transaction... (please wait)');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      const transaction = await deployedRcc.mint.sendTransaction(receiver, amount, {from: this.default_account.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
        console.log('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        console.log('Transaction complete!');
        this.refreshDefaultAccountBalance();
        this.refreshMintBalance();
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  setMintAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.mint_account.amount = e.target.value;
  }

  async refreshMintBalance() {
    console.log('Refreshing balance');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      console.log(deployedRcc);
      console.log('Account', this.mint_account.account);
      const rccBalance = await deployedRcc.balanceOf.call(this.mint_account.account);
      console.log('Found balance: ' + rccBalance);
      this.mint_account.balance = rccBalance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  async sendAddMinter() {
    if (!this.rcc_contract) {
      alert("El contrato rcc no está desplegado")
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }
    
    const receiver = this.minter_account.account;


    this.setStatus('Initiating transaction... (please wait)');
    console.log('Initiating transaction... (please wait)');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      const transaction = await deployedRcc.addMinter.sendTransaction(receiver, {from: this.default_account.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
        console.log('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        console.log('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  setMinterAccount(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.minter_account.account = e.target.value;
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

}
