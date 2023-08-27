import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'gownbn';



  showNavbar:boolean = true;
  showSidebar:boolean = true;
  showFooter:boolean = true;
  showtyperoom:boolean = true;

  showSidebarUser:boolean = true;

  id :string =''
  odject=[];
  arry={};
  data : any;


  constructor(
    protected router : Router
  ){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log('event.url',event.url);
  
        if((event['url'] == '/home')){
          this.showFooter= true;
        }
        
        // else if((event['url'] =='/register')||(event['url']== '/user-register')){
        //   this.showNavbar = true;
        //   this.showSidebar= false;
        //   this.showFooter= true;
        //   this.showtyperoom= false;
        //   this.showSidebarUser=false;
        // }
      }
    })
    
  }


}