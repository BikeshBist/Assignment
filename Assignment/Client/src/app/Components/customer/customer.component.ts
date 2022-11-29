import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Common/api.service';
import { Customers } from 'src/app/Common/Model/CustomerModel';
import { Orders } from 'src/app/Common/Model/CustomerOrderModel';
import * as _ from 'lodash';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer = new Customers();
  public order= new Orders();
  products: any;

  public countries = [{
    name: "Nepal"
  },
  {
    name: "India"
  }];
  customerList: any;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.products = this.service.products;
    console.log(this.service.employees);
    console.log(this.service.products);
    this.listCustomer();
  }
  
  addCustomer(){
    const cust  = this.customer.customerFormGroup.value;
    this.customer.Address = cust.Address;
    this.customer.City = cust.City;
    this.customer.ContactName = cust.ContactName;
    this.customer.CompanyName = cust.CompanyName;
    this.customer.ContactTitle = cust.ContactTitle;
    this.customer.Fax = cust.Fax;
    this.customer.Phone = cust.Phone;
    this.customer.Region = cust.Region;
    this.customer.Country=cust.Country;
    this.customer.PostalCode=cust.PostalCode;

    let customerObj = _.cloneDeep(this.customer);
    //console.log(customerObj);
    
    let tempObj = _.omit(customerObj,['customerFormGroup']);

    this.service.postCustomer(tempObj).subscribe(res =>{
      console.log(res); //do something here after response
      alert("Order placed successfully");
    }, err =>{
      console.log(err);
    })
    console.log(tempObj);
  }

  onProductChange($event: any){
    if($event){
      const productId = Number($event.target.value);
      const product = this.products.find((a:any) => a.productId === productId);
      this.order.orderFormGroup.controls["UnitPrice"].setValue(product.unitPrice);
      this.order.orderFormGroup.controls["ProductId"].setValue(product.productId);
    }
  }

  calculate(){
    const rate = Number(this.order.orderFormGroup.controls["UnitPrice"].value); //"2" = 2
    const quantity = Number(this.order.orderFormGroup.controls["Quantity"].value);
    const total = rate * quantity;

    this.order.orderFormGroup.controls["Total"].setValue(total);

  }

  AddOrders(){
    //console.log(this.order.orderFormGroup.value);
    const order = this.order.orderFormGroup.value;
    this.customer.Orders.push(order);
  }
  onCountryChange($event: any){
    if($event){
      this.customer.customerFormGroup.controls["Country"].setValue($event.target.value);
    }
  }

  listCustomer(){
    this.service.getCustomer().subscribe(
      res=>{
        this.customerList=res
        console.log(this.customerList);
      },
      err=>{
        console.log (err);
      }
      
    );

  }
}
