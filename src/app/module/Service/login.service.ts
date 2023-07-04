import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env/environment';
import { Observable } from 'rxjs';
const API_ENDPOINT = environment.API_ENDPOINT;
const httpoption = {headers: new HttpHeaders({'Content-Type': 'application/json'})  };
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(ctmUser: any,ctmPassword: any):Observable<Object> {
    return this.http.post(API_ENDPOINT.concat('/login/'+ctmUser+'/'+ctmPassword),httpoption)
   }
}
