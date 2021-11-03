import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../page-component/login/login.component'
import { HomeComponent } from '../page-component/home/home.component'
import { LayoutComponent } from '../layout/layout.component';
import { SalesComponent } from '../page-component/sales/sales.component';
import { OrdersComponent } from '../page-component/orders/orders.component';
import { ProfileComponent } from '../page-component/profile/profile.component';
import { AdministratorComponent } from '../page-component/administrator/administrator.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sale',
        component: SalesComponent
      },
      {
        path: 'order',
        component: OrdersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'administrator',
        component: AdministratorComponent
      }
    ]
  }
];
