import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EventsComponent } from './components/events/events.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { ViewEmpDetailsComponent } from './components/view-emp-details/view-emp-details.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'events' },
  { 
    path: 'employee-list', component: ViewEmployeesComponent,
    canActivate: [AuthGuard]
   },
  { 
    path: 'create-employee', component: CreateEmployeeComponent,
    canActivate: [AuthGuard]
     },
  { path: 'view-deatils/:id', component: ViewEmpDetailsComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  // { path: 'delete-employee/:id', component: DeleteEmployeeComponent }
  { path: 'filter', component: FilterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'events', component: EventsComponent },
  { 
    path: 'special-events', component: SpecialEventsComponent, 
    canActivate: [AuthGuard] 
  },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
