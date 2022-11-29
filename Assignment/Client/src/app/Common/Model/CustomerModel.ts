import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Orders } from "./CustomerOrderModel";

export class Customers{
    CustomerId:string=""; 
    CompanyName:string="";
    ContactName:string="";
    ContactTitle:string="";
    Address:string="";
    City:string="";
    Region:string="";   
    PostalCode:string="";
    Country:string="";
    Phone:string="";
    Fax:string="";
    Orders:Array<Orders>=new Array<Orders>();
    customerFormGroup!:FormGroup;

    constructor(){
        let formbuiler= new FormBuilder();
        this.customerFormGroup=formbuiler.group({
            CompanyName:['',[Validators.required]],
            ContactName:['',[Validators.required]],
            ContactTitle:['',[Validators.required]],
            Address:['',[Validators.required]],
            City:['',[Validators.required]],
            Region:['',[Validators.required]],
            PostalCode:['',[Validators.required]],
            Country:['',[Validators.required]],
            Phone:['',[Validators.required]],
            Fax:['',[Validators.required]],

        })
    }
}