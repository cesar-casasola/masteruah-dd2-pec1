import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

import { RccDaoService } from '../../util/rccDao.service';

@Component({
  selector: 'app-add-associated-review',
  templateUrl: './add-associated.component.html',
  styleUrls: ['./add-associated.component.css']
})
export class AddAssociatedComponent implements OnInit {

  constructor(public modalService: NgbModal, 
    public activeModal: NgbActiveModal,
    public rccDaoService: RccDaoService) { }    
      
  @Input() public associated: any;
  @Input() public mode: string;

  addAssociated: FormGroup;

  ngOnInit() {  
    this.addAssociated = new FormGroup(
      {
        address: new FormControl(''),
        name: new FormControl(''),
        ref: new FormControl(''),        
      }
    )
  }
 
  add(){
    this.rccDaoService.newAssociated(this.associated.address, this.associated.name, this.associated.ref)
    .then(
      result => {                          
        if (result == "OK"){                                
          this.activeModal.close('OK');
        }
      },
      err => console.log(err)      
    )
  }  

  closeModal() {
    this.activeModal.close('KO');
  } 

}
