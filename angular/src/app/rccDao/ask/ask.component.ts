import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RccDaoService } from '../../services/rccDao.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccDaoService: RccDaoService,
    private matSnackBar: MatSnackBar) { }    
      
  @Input() public ask: any;
  @Input() public mode: string;

  

  askForm: FormGroup;

  ngOnInit() {  
    this.askForm = new FormGroup(
      {
        address: new FormControl(''),
        amount: new FormControl(''),
        message: new FormControl(''),        
      }
    )
  }

  send(){        
    this.rccDaoService.ask(this.ask.address, this.ask.amount, this.ask.message)
    .then(      
      result => {                     
        if (result == "OK"){                                
          this.activeModal.close('OK');
          this.setStatus("Se ha realizado una petición de RCC");
        }
      },
      err => {
        this.setStatus("No se ha podido realizar la petición de RCC");
        console.log(err)      
      }
    )
  }  

  closeModal() {
    this.activeModal.close('KO');
  } 

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }


}
