import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RccDaoComponent } from './rccDao/rccDao.component';
import { AddAssociatedComponent } from './add-associated/add-associated.component';
import { RccComponent } from './rcc/rcc.component';

@NgModule({
  declarations: [
    RccDaoComponent,    
    AddAssociatedComponent,
    RccComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    NgbModule 
  ],  
  entryComponents: [    
    AddAssociatedComponent,
    RccComponent
  ],
  exports: [
    RccDaoComponent
  ]  
})
export class RccDaoModule { }
