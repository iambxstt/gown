import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-custmer',
  templateUrl: './edit-custmer.component.html',
  styleUrls: ['./edit-custmer.component.css']
})
export class EditCustmerComponent implements OnInit {
  constructor(private formbulider:FormBuilder,private router:Router,private activedroute:ActivatedRoute,private custmerservice:UserService){}
  ctmId:any
  formAdd = this.formbulider.group({
    ctmId:0,
    ctmUser:'',
    ctmPassword:'',
    ctmTitle:'',
    ctmFirstname:'',
    ctmLastname:'',
    ctmPhon:'',
    ctmEmail:'',
    ctmUniversity:'',
    ctmFaculty:'',
    ctmMajor:'',
    roleId: 0
  })

  ngOnInit(): void {
    this.ctmId = this.activedroute.snapshot.paramMap.get("ctmId");
    this.dataforedit(this.ctmId)
  }
  dataforedit(ctmId:any){
    this.custmerservice.getById(ctmId).subscribe((res)=>{
      if(res){
        this.formAdd.patchValue({
          ctmId:res.ctmId,
          ctmUser: res.ctmUser,
          ctmPassword: res.ctmPassword,
          ctmTitle: res.ctmTitle,
          ctmFirstname: res.ctmFirstname,
          ctmLastname: res.ctmLastname,
          ctmPhon: res.ctmPhon,
          ctmEmail: res.ctmEmail,
          ctmUniversity: res.ctmUniversity,
          ctmFaculty: res.ctmFaculty,
          ctmMajor: res.ctmMajor,
          roleId:res.roleId
        })
      }
    })
  }
  Onsubmit(){
    const UserDto = this.formAdd.value;
    UserDto.roleId = 1
    Swal.fire({
      title: 'ต้องการเพิ่มผู้ใช้งาน?',
      text: "คุณต้องการเพิ่มผู้ใช้งานใช่หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#56C596' ,
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก' 
    }).then((result) => {
      if (result.isConfirmed) {
        this.custmerservice.updateCustmers(UserDto.ctmId,UserDto).subscribe(res => {
          Swal.fire(
            'Sucess',
            'Your file has been Compelete.',
            'success'
          )
         //  window.location.reload()
         this.router.navigate(['admin/main'])
        });

      }
    })
  }
}
