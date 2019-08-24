import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';


declare let require: any;
const rccDao_contract = require('../../../../../truffle/build/contracts/RccDao.json');
const rcc_contract = require('../../../../../truffle/build/contracts/RCC.json');

export interface IAssociated {
  address: string;
  name: string;
  ref: string;
}

@Component({
  selector: 'app-rcc-dao',
  templateUrl: './rcc-dao.component.html',
  styleUrls: ['./rcc-dao.component.css']
})
export class RccDaoComponent implements OnInit {

  accounts: string[];
  associatedList: string[];  
  rcc_contract: any;
  rccDao_contract: any;

  default_account = {
    amount: 0,
    receiver: '',
    balance: 0,
    account: ''
  };

  new_associated = {
    address: '',
    name: '',
    ref: '',    
  };

  associated = {
    address: '',
    name: '',
    ref: '',    
  };

  displayedColumns: string[] = ['address', 'name', 'ref'];  

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) {    
   }

  ngOnInit() {
    console.log('OnInit: ' + this.web3Service);
    this.watchAccount();
    this.web3Service.artifactsToContract(rccDao_contract)
      .then((RccDaoAbstraction) => {
        this.rccDao_contract = RccDaoAbstraction;
        this.rccDao_contract.deployed().then(deployed => {
          console.log(deployed);
          /*
          deployed.Transfer({}, (err, ev) => {
            console.log('Transfer event came in, refreshing balance');
            this.refreshBalance();
          });
          */
        });
      });      

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
      this.accounts =  this.web3Service.accounts;   
      this.default_account.account = this.accounts[0];
      this.refreshBalance();     
    }

    async init() {
      try {
        const deployedRcc = await this.rcc_contract.deployed();
        const deployedRccDao = await this.rccDao_contract.deployed();        
        const transaction = await deployedRcc.addMinter.sendTransaction(deployedRccDao.address, {from: this.default_account.account});
  
        if (!transaction) {
          this.setStatus('Transaction failed!');
          console.log('Transaction failed!');
        } else {
          this.setStatus('Transaction complete!');
          console.log('Transaction complete!');          
        }
      } catch (e) {
        console.log(e);
        this.setStatus('Error sending new Associated; see log.');
      }
    }

    async refreshBalance() {
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

    async newAssociated() {
      if (!this.rccDao_contract) {
        alert("El contrato rccDao no está desplegado")
        this.setStatus('Metacoin is not loaded, unable to send transaction');
        return;
      }
  
      console.log('Sending transaction of new associated: ' + this.new_associated.address);
  
      this.setStatus('Initiating transaction... (please wait)');
      console.log('Initiating transaction... (please wait)');
      try {
        const deployedRccDao = await this.rccDao_contract.deployed();
        const transaction = await deployedRccDao.newAssociated.sendTransaction(this.new_associated.address, this.new_associated.name, this.new_associated.ref, true, true, {from: this.default_account.account});
  
        if (!transaction) {
          this.setStatus('Transaction failed!');
          console.log('Transaction failed!');
        } else {
          this.setStatus('Transaction complete!');
          console.log('Transaction complete!');          
        }
      } catch (e) {
        console.log(e);
        this.setStatus('Error sending new Associated; see log.');
      }
    }

    setNewAssociatedAddress(e) {
      console.log('Setting receiver: ' + e.target.value);
      this.new_associated.address = e.target.value;
    }

    setNewAssociatedName(e) {
      console.log('Setting receiver: ' + e.target.value);
      this.new_associated.name = e.target.value;
    }

    setNewAssociatedRef(e) {
      console.log('Setting receiver: ' + e.target.value);
      this.new_associated.ref = e.target.value;
    }

    async getAssociatedList() {
      if (!this.rccDao_contract) {
        alert("El contrato rccDao no está desplegado")
        this.setStatus('Metacoin is not loaded, unable to send transaction');
        return;
      }
  
      console.log('Sending transaction of getAssociatedList: ');
  
      this.setStatus('Initiating transaction... (please wait)');
      console.log('Initiating transaction... (please wait)');
      try {
        const deployedRccDao = await this.rccDao_contract.deployed();
        this.associatedList = await deployedRccDao.getAssociatedList.call();      
        console.log(this.associatedList);
        
      } catch (e) {
        console.log(e);
        this.setStatus('Error sending new Associated; see log.');
      }
    }

    async getAssociated() {
      if (!this.rccDao_contract) {
        alert("El contrato rccDao no está desplegado")
        this.setStatus('Metacoin is not loaded, unable to call transaction');
        return;
      }
  
      console.log('Sending transaction of getAssociated: ');
  
      this.setStatus('Initiating transaction... (please wait)');
      console.log('Initiating transaction... (please wait)');
      try {
        const deployedRccDao = await this.rccDao_contract.deployed();
        const associated = await deployedRccDao.getAssociated.call(this.associated.address);      
        console.log(associated);        
        this.associated.name = associated.name;
        this.associated.ref = associated.ref;
        
      } catch (e) {
        console.log(e);
        this.setStatus('Error sending new Associated; see log.');
      }
    }

    /*
    async getAssociatedTable() {   
      this.associatedTable = new Array<IAssociated>();
      await this.getAssociatedList();
      this.associatedList.forEach(async associated_address => {    
        const associated = await this.getAssociated(associated_address);       
        this.dataSource.data.push({"address": associated_address, "name": associated.name, "ref": associated.ref} as IAssociated);
        
        //this.associatedTable.push({"address": associated_address, "name": associated.name, "ref": associated.ref});
        alert(JSON.stringify(this.dataSource.data))
      });      
    }
    */

    setStatus(status) {
      this.matSnackBar.open(status, null, {duration: 3000});
    }
}
