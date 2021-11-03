import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import Angular Material
import { AppRoutes } from './app-routing/app-routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTableModule } from '@angular/material/table';

//import component page
import { LoginComponent } from './page-component/login/login.component';
import { HomeComponent } from './page-component/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

//import component service
import { GeneralService } from './services/general.service';
import { SalesComponent } from './page-component/sales/sales.component';
import { OrdersComponent } from './page-component/orders/orders.component';
import { ProfileComponent } from './page-component/profile/profile.component';
import { AdministratorComponent } from './page-component/administrator/administrator.component';

//Loading
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    SalesComponent,
    OrdersComponent,
    ProfileComponent,
    AdministratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDividerModule,
    FlexLayoutModule,
    MaterialFileInputModule,
    MatTableModule,
    NgxUiLoaderModule,
    RouterModule.forRoot(AppRoutes, {useHash: false, relativeLinkResolution: 'legacy'}),
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    { provide: GeneralService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
