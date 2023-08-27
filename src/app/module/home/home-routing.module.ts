import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ExamplegownComponent } from './examplegown/examplegown.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RegisterComponent } from './register/register.component';
import { RentgownComponent } from './rentgown/rentgown.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { PaymentnotificationComponent } from './paymentnotification/paymentnotification.component';
import { UesrregisterComponent } from './uesrregister/uesrregister.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { IdgownComponent } from './idgown/idgown.component';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { UesrRentComponent } from './uesr-rent/uesr-rent.component';
import { UesrCheckReComponent } from './uesr-check-re/uesr-check-re.component';

const routes: Routes = [
  {path :'',component : HomeComponent },
  {path :'login',component : LoginComponent },
  {path :'order',component : OrderComponent },
  {path :'examplegown',component : ExamplegownComponent },
  {path :'subscribe',component : SubscribeComponent },
  {path :'register',component : RegisterComponent },
  {path :'rentgown',component : RentgownComponent },
  {path :'paymentmethod',component : PaymentmethodComponent },
  {path :'paymentnotification',component : PaymentnotificationComponent },
  {path :'userregister',component : UesrregisterComponent },
  {path :'loginregister',component : LoginregisterComponent },
  {path :'idgown',component : IdgownComponent },
  {path :'example-a',component : ExampleAComponent },
  {path :'example-b',component : ExampleBComponent },
  {path :'example-c',component : ExampleCComponent },
  {path :'edit-user',component : EditUserComponent },
  {path :'edit-order',component : EditOrderComponent },
  {path :'user-rent',component : UesrRentComponent },
  {path :'user-check-re',component : UesrCheckReComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
