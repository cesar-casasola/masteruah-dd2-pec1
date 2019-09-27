import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RccDaoComponent } from './rccDao/rccDao.component';
import { AddAssociatedComponent } from './add-associated/add-associated.component';
import { RccComponent } from './rcc/rcc.component';
import { AskComponent } from './ask/ask.component';
import { ApproveComponent } from './approve/approve.component';
import { AskListComponent } from './ask-list/ask-list.component';

@NgModule({
  declarations: [
    RccDaoComponent,    
    AddAssociatedComponent,
    RccComponent,
    AskComponent,
    ApproveComponent,
    AskListComponent
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
    RccComponent,
    AskComponent,
    ApproveComponent,
    AskListComponent
  ],
  exports: [
    RccDaoComponent
  ]  
})
export class RccDaoModule { }
