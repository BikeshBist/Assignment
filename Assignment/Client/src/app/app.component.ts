import { Component, OnInit } from '@angular/core';
import { ApiService } from './Common/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Client';
  /**
   *
   */
  constructor(private apiServices:ApiService) {
      
  }

  ngOnInit(): void {
    this.getProducts();
    this.getEmployees();
  }

  getEmployees(){
    this.apiServices.getEmployees().subscribe(res =>{
      this.apiServices.employees = res;
    }, err =>{
      console.log(err);
    });
  }

  getProducts(){
    this.apiServices.getProducts().subscribe(res =>{
      this.apiServices.products = res;
    }, err =>{
      console.log(err);
    });
  }
}
