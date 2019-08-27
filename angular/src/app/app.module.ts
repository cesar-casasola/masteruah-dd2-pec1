import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { RccDaoComponent } from './rccDao/rccDao/rccDao.component';
import { RccDaoModule } from './rccDao/rccDao.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';

const routes: Routes = [
  { path: 'rccDao', component: RccDaoComponent },
  { path: '', redirectTo: '/rccDao', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    MatMenuModule,
    MatTableModule,
    RccDaoModule,
    MatSnackBarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
