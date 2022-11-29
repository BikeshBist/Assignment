import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: "login" ,component:LoginComponent
  },
  {
    path:"" ,redirectTo:"login",pathMatch:'full'
  },

{
  path:"Home",loadChildren:()=>import('./Components/home/home.module').then(m=>m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
