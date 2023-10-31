import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  // EmployeeId = 0;
  EmployeeId: any;
  editEmployee: any;
  employeDetails: any;
  // dataLoaded: boolean = false;

  constructor(private actRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder,
              private router: Router
  ) { }

  ngOnInit(): void {
    // this.dataLoaded = false;
    this.actRoute.params.subscribe(data => {
      this.EmployeeId = data.id;
    })
    // this.updateEmployee();
    this.getEmployeeById(this.EmployeeId);
    this.editEmployee = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }


  // First way
  // getEmployeeById(EmployeeId: any) {
  //   this.employeeService.getEmployee(EmployeeId).subscribe(data => {
  //     this.employeDetails = data;
  //     console.log(this.employeDetails);
  //     this.editEmployee.setValue({
  //       name: data['name'],
  //       email: data['email']
  //     })
  //   });
  // }

  // updateEmployee() {
  //   this.editEmployee = this.formBuilder.group({
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.required]],
  //     phone: ['', [Validators.required]]
  //   })
  // }

  // onSubmit() {
  //   if(!this.editEmployee.valid) {
  //     return;
  //   } else {
  //     let id = this.actRoute.snapshot.paramMap.get('id');
  //     this.employeeService.updateEmployee(id, this.editEmployee.value).subscribe(data => {
  //       console.log(data);
        
  //     })
  //   }
  //   console.log(this.editEmployee.value);
    
  // }


  // IInd way
  getEmployeeById(EmployeeId: any) {

    if(this.EmployeeId !== ''){
      this.employeeService.getEmployee(this.EmployeeId).toPromise().then(data => {
        this.employeDetails = data;
        // Object.assign(this.employeDetails, data);
        console.log(this.employeDetails);

        // Build the edit form
        this.editEmployee = this.formBuilder.group({
          'name': new FormControl(this.employeDetails.name),
          'email': new FormControl(this.employeDetails.email),
          'address': new FormControl(this.employeDetails.address),
          'phone': new FormControl(this.employeDetails.phone)
        })
        // this.dataLoaded = true;
      }).catch(err => {
        console.log(err);        
      })
    }
  }

  onSubmit() {
    if(!this.editEmployee.valid) {
      return;
    } else {
      this.employeeService.updateEmployee(this.EmployeeId, this.editEmployee.value).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/employee-list');
      }, (error) => {
        console.log('+++++++' , error);        
      })
    }
    console.log(this.editEmployee.value);
    console.log('employee updated successfully!');        
  }


}
