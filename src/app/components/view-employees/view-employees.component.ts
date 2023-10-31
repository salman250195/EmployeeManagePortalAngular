import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  Employee: any = [];
  error: any;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.spinner.show();
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.spinner.hide();
      console.log(data);
      console.log('get All Employees!');      
      this.Employee = data;
      // alert(data.name);
    }, (error) => {
      console.log("++++", error);
      if(error instanceof HttpErrorResponse) {
         if(error.status === 401) {
          this.router.navigate(['/login'])
        }
      }
      this.error = error;
    })
  }

  removeEmployee(employee: any, index: any) {
    this.employeeService.deleteEmployee(employee._id).subscribe(data => {
      console.log(data);
      // this.Employee.splice(index, 1);
      // this.Employee = data;
      this.getEmployees();
      console.log('Data deleted successfully');      
    },
      error => {
        console.log(error);        
      })
  }

}
