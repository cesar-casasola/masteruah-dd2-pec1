import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';

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

  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(rcc_contract)
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

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.default_account.account = accounts[0];
      this.refreshBalance();
    });
  }

  async refreshBalance() {
    console.log('Refreshing balance');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      console.log(deployedRcc);
      console.log('Account', this.default_account.account);
      const rccBalance = await deployedRcc.getBalance.call(this.default_account.account);
      console.log('Found balance: ' + rccBalance);
      this.default_account.balance = rccBalance;
    } catch (e) {
      console.log(e);
      //this.setStatus('Error getting balance; see log.');
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
      //this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.default_account.amount;
    const receiver = this.default_account.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    //this.setStatus('Initiating transaction... (please wait)');
    console.log('Initiating transaction... (please wait)');
    try {
      const deployedRcc = await this.rcc_contract.deployed();
      const transaction = await deployedRcc.transfer.sendTransaction(receiver, amount, {from: this.default_account.account});

      if (!transaction) {
        //this.setStatus('Transaction failed!');
        console.log('Transaction failed!');
      } else {
        //this.setStatus('Transaction complete!');
        console.log('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      //this.setStatus('Error sending coin; see log.');
    }
  }

}
