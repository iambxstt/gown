import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCustmerComponent } from './add-custmer/add-custmer.component';
import { EditCustmerComponent } from './edit-custmer/edit-custmer.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminReturnDressComponent } from './admin-return-dress/admin-return-dress.component';
import { AdminGowmComponent } from './admin-gowm/admin-gowm.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AddGownComponent } from './add-gown/add-gown.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCustmerComponent } from './admin-custmer/admin-custmer.component';


const routes: Routes = [
  {path: 'main',component:AdminComponent},
  {path: 'Add',component:AddCustmerComponent},
  {path: 'edit/:ctmId',component:EditCustmerComponent},
  {path: 'admin-order',component:AdminOrderComponent},
  {path: 'admin-return-dress',component:AdminReturnDressComponent},
  {path: 'admin-gown',component:AdminGowmComponent},
  {path: 'admin-report',component:AdminReportComponent},
  {path: 'add-custmer',component:AddCustmerComponent},
  {path: 'add-gown',component:AddGownComponent},
  {path: 'admin-home',component:AdminHomeComponent},
  {path: 'admin-custmer',component:AdminCustmerComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
