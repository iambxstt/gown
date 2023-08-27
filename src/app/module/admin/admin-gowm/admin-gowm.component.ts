import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GownService } from '../../Service/gown.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-gowm',
  templateUrl: './admin-gowm.component.html',
  styleUrls: ['./admin-gowm.component.css']
})
export class AdminGowmComponent implements OnInit{
  constructor(private router:Router,private gownservice:GownService){}
  ListAdminGown: any
  ngOnInit(): void {
    this.gownservice.getAll().subscribe(res =>{
      console.log('res =>',res)
      if(res){this.ListAdminGown = res}
      console.log(res)
    })
  }
  ondelete(item : any){
    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: "คุณต้องการลบข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gownservice.deleteById( Number (item.gownId)).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.ngOnInit()
        })
      }
    })
  }
  OngetId(item : any){
    this.router.navigate([ 'admin/edit/'+item.gownId ])
  }
}
