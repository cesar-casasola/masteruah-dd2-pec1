import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';


import { Routes, RouterModule } from '@angular/router';
import { MetaSenderComponent } from './meta/meta-sender/meta-sender.component';
import { RccComponent } from './meta/rcc/rcc.component';

import { AppComponent } from './app.component';
import { MetaModule } from './meta/meta.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

const routes: Routes = [
  { path: 'meta', component: MetaSenderComponent },
  { path: 'rcc', component: RccComponent },
  { path: '', redirectTo: '/meta', pathMatch: 'full' }
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
    MetaModule,
    MatMenuModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
