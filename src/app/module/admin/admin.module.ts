import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddCustmerComponent } from './add-custmer/add-custmer.component';


@NgModule({
  declarations: [
    
  
    AddCustmerComponent
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
