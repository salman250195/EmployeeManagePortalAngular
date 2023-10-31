import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService, 
              private router: Router) { }


  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return;
    } else {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe((data) => {
        console.log('Employee created successfully!');
        this.router.navigateByUrl('/employee-list');
        console.log(this.employeeForm.value);
        console.log('employee data : ' , data);        
      }, (error) => {
        console.log(error); 
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            this.router.navigate(['/login']);
          }
        }       
      })
    }
  }

}
