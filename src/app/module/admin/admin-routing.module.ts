import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCustmerComponent } from './add-custmer/add-custmer.component';

const routes: Routes = [
  {path: 'main',component:AdminComponent},
  {path: 'Add',component:AddCustmerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
