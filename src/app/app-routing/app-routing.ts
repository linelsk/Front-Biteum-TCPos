import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../page-component/login/login.component'

export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
