import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Service/login.service';
import { LoginModel } from '../../Model/LoginModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formbuilder:FormBuilder,private router:Router,private loginservice:LoginService){}
  //เรียกใช้
  loginform= this.formbuilder.group({
    ctmUser:'',
    ctmPassword:'',
   })
   Onsubmit(){
    const userDTO: LoginModel = this.loginform.value as unknown as LoginModel;
    Swal.fire({
      title: 'ต้องการเข้าสู่ระบบ?',
      text: 'คุณต้องการเข้าสู่ระบบใช่หรือไม่!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, we it!',
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('user_role')

        this.loginservice.login(userDTO.ctmUser , userDTO.ctmPassword).subscribe((res:any) => {
          console.log(res)
          if(res){sessionStorage.removeItem('user_role');
          sessionStorage.removeItem('user_id');
          Swal.fire('success!', 'Your file has been success.', 'success');
          sessionStorage.setItem('user_role',res.roleId)
          // sessionStorage.setItem('user_role',res.recordStatus)
          sessionStorage.setItem('user_id',res.userId)

            if(res.roleId==2){
              sessionStorage.setItem('user_role','user')
              this.router.navigate(['user']).then(() => {
              window.location.reload()
              });
            }else if(res.roleId==1 ){
              sessionStorage.setItem('user_role','admin')
              this.router.navigate(['admin/main']).then(() => {
                window.location.reload()
              });
            }else{

            }
          }else{
            Swal.fire('ไม่สามารถเข้าสู่ระบบได้!', 'Your file has been success.', 'warning');

          } 



          this.ngOnInit();
        });
      }
    });
   }

  ngOnInit(): void {
    
  }

}
