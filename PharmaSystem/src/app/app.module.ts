import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule  } from '@angular/common';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { SalesComponent } from './sales/sales.component';
import { ConsultClientComponent } from './client/consult-client/consult-client.component';
import { ConsultEmployeeComponent } from './employee/consult-employee/consult-employee.component';
import { ConsultMedicinesComponent } from './medicines/consult-medicines/consult-medicines.component';
import { ConsultSalesComponent } from './sales/consult-sales/consult-sales.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    ClientComponent,
    EmployeeComponent,
    MedicinesComponent,
    SalesComponent,
    ConsultClientComponent,
    ConsultEmployeeComponent,
    ConsultMedicinesComponent,
    ConsultSalesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

        { path: '', component: HomeComponent},
        { path: 'dashboard', component: DashboardComponent },
        { path: 'medicine', component: MedicinesComponent },
        { path: 'client', component: ClientComponent },
        { path: 'employee', component: EmployeeComponent },
        { path: 'sales', component: SalesComponent },
        { path: 'medicine/consult-medicine', component: ConsultMedicinesComponent },
        { path: 'client/consult-client', component: ConsultClientComponent },
        { path: 'employee/consult-employee', component: ConsultEmployeeComponent },
        { path: 'sales/consult-sales', component: ConsultSalesComponent },
 
     

    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
