import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from '../customer/customer.component';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ 
    HomeComponent,
    CustomerComponent


  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
