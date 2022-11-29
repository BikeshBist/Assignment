import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Orders
{
    RequiredDate:string="";
    ShipAddress:string="";
    ShipCity:string="";
    ShipRegion:string="";
    ShipPostalCode:string="";
    ShipCountry:string="";
    UnitPrice:number=0;
    Quantity:number=0;
    Total:number=0;
    ProductId: number = 0;

    orderFormGroup!:FormGroup

    constructor(){
        let formbuiler= new FormBuilder();
        this.orderFormGroup=formbuiler.group({
            ShipName:['',[Validators.required]],
            RequiredDate:['',[Validators.required]],
            ShipAddress:['',[Validators.required]],
            ShipCity:['',[Validators.required]],
            ShipRegion:['',[Validators.required]],
            ShipPostalCode:['',[Validators.required]],
            ShipCountry:['',[Validators.required]],
            UnitPrice:['',[Validators.required]],
            Quantity:['',[Validators.required]],
            Total:['',[Validators.required]],
            ProductId:['',[Validators.required]],
           
        })
    }

}