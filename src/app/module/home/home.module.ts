import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { OrderComponent } from './order/order.component';
import { GownComponent } from './gown/gown.component';
import { RegisterComponent } from './register/register.component';
import { ExamplegownComponent } from './examplegown/examplegown.component';
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



@NgModule({
  declarations: [
  
    LoginComponent,
       SubscribeComponent,
       OrderComponent,
       GownComponent,
       RegisterComponent,
       ExamplegownComponent,
       RentgownComponent,
       PaymentmethodComponent,
       PaymentnotificationComponent,
       UesrregisterComponent,
       LoginregisterComponent,
       IdgownComponent,
       ExampleAComponent,
       ExampleBComponent,
       ExampleCComponent,
       EditUserComponent,
       EditOrderComponent,
       UesrRentComponent,
       UesrCheckReComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild()
  ]
})
export class HomeModule { }
