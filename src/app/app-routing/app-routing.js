"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var login_component_1 = require("../page-component/login/login.component");
var home_component_1 = require("../page-component/home/home.component");
var layout_component_1 = require("../layout/layout.component");
var sales_component_1 = require("../page-component/sales/sales.component");
var orders_component_1 = require("../page-component/orders/orders.component");
var profile_component_1 = require("../page-component/profile/profile.component");
var administrator_component_1 = require("../page-component/administrator/administrator.component");
exports.AppRoutes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            {
                path: 'home',
                component: home_component_1.HomeComponent
            },
            {
                path: 'sale',
                component: sales_component_1.SalesComponent
            },
            {
                path: 'order',
                component: orders_component_1.OrdersComponent
            },
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent
            },
            {
                path: 'administrator',
                component: administrator_component_1.AdministratorComponent
            }
        ]
    }
];
//# sourceMappingURL=app-routing.js.map