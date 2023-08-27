import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddCustmerComponent } from './add-custmer/add-custmer.component';
import { EditCustmerComponent } from './edit-custmer/edit-custmer.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminReturnDressComponent } from './admin-return-dress/admin-return-dress.component';
import { AdminGowmComponent } from './admin-gowm/admin-gowm.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AddGownComponent } from './add-gown/add-gown.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCustmerComponent } from './admin-custmer/admin-custmer.component';


@NgModule({
  declarations: [
    AddCustmerComponent,
    EditCustmerComponent,
    AdminOrderComponent,
    AdminReturnDressComponent,
    AdminGowmComponent,
    AdminReportComponent,
    AddGownComponent,
    AdminHomeComponent,
    AdminCustmerComponent,
    
    
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
