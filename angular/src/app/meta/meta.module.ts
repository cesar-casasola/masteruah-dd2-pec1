import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaSenderComponent} from './meta-sender/meta-sender.component';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule, MatSnackBarModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material'
import { MatTableModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RccComponent } from './rcc/rcc.component';
import { RccDaoBComponent } from './rcc-dao/rcc-dao-b.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterModule,
    UtilModule,
    MatExpansionModule,
    MatTableModule
  ],
  declarations: [MetaSenderComponent, RccComponent, RccDaoBComponent],
  exports: [MetaSenderComponent]
})
export class MetaModule {
}
