import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginModel } from '../Model/LoginModel';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}
