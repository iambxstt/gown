import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GownService } from '../../Service/gown.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-gown',
  templateUrl: './add-gown.component.html',
  styleUrls: ['./add-gown.component.css']
})
export class AddGownComponent implements OnInit{
  constructor(private formBuilder: FormBuilder,private router:Router,private activedRoute:ActivatedRoute,private gownservice:GownService){}
  formAdd = this.formBuilder.group({
    gownId:'',
    gownName:'',
    gownImg:'',
    gownLevel:'',
    gownDetails:'',
    roleId: 0
  })
  ngOnInit(): void {
    
  }
  Onsubmit(){
    const GownDto = this.formAdd.value;
    GownDto.roleId = 1
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
        this.gownservice.saveCustmers(GownDto).subscribe(res => {
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
