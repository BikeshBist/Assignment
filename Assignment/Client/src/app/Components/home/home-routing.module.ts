import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';

import { HomeComponent } from './home.component';


const routes: Routes = [
  
            {
                path:"", redirectTo:"customer", pathMatch:'full'
            },
            {
                path:"customer", component:CustomerComponent
            }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
