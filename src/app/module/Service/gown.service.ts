import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';
const API_ENDPOINT = environment.API_ENDPOINT;
const httpoption = {headers: new HttpHeaders({'Content-Type': 'application/json'})  };
@Injectable({
  providedIn: 'root'
})
export class GownService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(API_ENDPOINT.concat('/Gown'),httpoption)
  }
  getById(gownId: any):Observable<any>{
    return this.http.get(API_ENDPOINT.concat('/Gown/'+gownId),httpoption)
  }
  saveCustmers(data: any):Observable<any>{
    const body = JSON.stringify(data)
    return this.http.post<any>(API_ENDPOINT.concat('/Gown'),body,httpoption)
  }
  deleteById(gownId: any):Observable<any>{
    return this.http.delete(API_ENDPOINT.concat('/Gown/'+gownId),httpoption)
  }
  updateCustmers(gownId: any,data: any):Observable<any>{
    const body = JSON.stringify(data)
    return this.http.put<any>(API_ENDPOINT.concat('/Gown/'+gownId),body,httpoption)
  }
}
