import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sitebar/header/header.component';
import { FooterComponent } from './sitebar/footer/footer.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { ViewEmpDetailsComponent } from './components/view-emp-details/view-emp-details.component';
import { EmployeeInterceptor } from './employee.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { EventsComponent } from './components/events/events.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { SidenavComponent } from './sitebar/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewEmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ViewEmpDetailsComponent,
    FilterComponent,
    LoginComponent,
    RegistrationComponent,
    EventsComponent,
    SpecialEventsComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: EmployeeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
