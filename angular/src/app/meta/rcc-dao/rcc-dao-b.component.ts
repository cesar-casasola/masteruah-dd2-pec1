import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';


declare let require: any;
const rccDao_truffle_contract = require('../../../../../truffle/build/contracts/RccDao.json');
const rcc_truffle_contract = require('../../../../../truffle/build/contracts/RCC.json');

export interface IAssociated {
  address: string;
  name: string;
  ref: string;
}

@Component({
  selector: 'app-rcc-dao-b',
  templateUrl: './rcc-dao-b.component.html',
  styleUrls: ['./rcc-dao-b.component.css']
})
export class RccDaoBComponent implements OnInit {
  
  associatedList: string[];  

  rcc_contract: any;
  deployedRcc: any;

  rccDao_contract: any;
  deployedRccDao: any;

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
    this.refreshAccount().then(() =>{
      console.log('Default account: ' + this.default_account.account);        
      this.refreshDefaultAccountBalance();  
    })

    this.web3Service.getToContract(rccDao_truffle_contract)
      .then((RccDaoAbstraction) => {
        this.rccDao_contract = RccDaoAbstraction;
        this.rccDao_contract.deployed().then(deployed => {
          this.deployedRccDao = deployed;          
        });
      });      

    this.web3Service.getToContract(rcc_truffle_contract)
      .then((RccAbstraction) => {
        this.rcc_contract = RccAbstraction;
        this.rcc_contract.deployed().then(deployed => {
          this.deployedRcc = deployed;
          console.log(deployed);                       
        });
      });      
    }

    async refreshAccount() {       
      if (!this.web3Service.accounts){        
        this.web3Service.accountsObservable.subscribe((accounts) => {              
          this.default_account.account = accounts[0];                
        });     
      }else{              
        this.default_account.account = this.web3Service.accounts[0];  
      }
    }

    async init() {
      try {     
        const transaction = await this.deployedRcc.addMinter.sendTransaction(this.deployedRccDao.address, {from: this.default_account.account});  
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

    async refreshDefaultAccountBalance() {
      console.log('Refreshing balance');
      try {
        console.log('Account', this.default_account.account);

        const rccBalance = await this.deployedRcc.balanceOf.call(this.default_account.account);
        this.default_account.balance = rccBalance;

        console.log('Found balance: ' + rccBalance);
        
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
        const transaction = await this.deployedRccDao.newAssociated.sendTransaction(this.new_associated.address, this.new_associated.name, this.new_associated.ref, true, true, {from: this.default_account.account});
  
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
