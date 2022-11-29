import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public employees: any;
  public products: any;

  constructor(private http:HttpClient) { }

  postCustomer(customerObj: any):Observable<any>{
    return this.http.post("https://localhost:44308/api/CustomerApi", customerObj,{responseType:'json'});
  }

  getEmployees(): Observable<any>{
    return this.http.get("https://localhost:44308/api/CustomerApi/GetEmployees", {responseType: 'json'});
  }

  getProducts(): Observable<any>{
    return this.http.get("https://localhost:44308/api/CustomerApi/GetProducts", {responseType: 'json'});
  }
}
