import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-view-emp-details',
  templateUrl: './view-emp-details.component.html',
  styleUrls: ['./view-emp-details.component.css']
})
export class ViewEmpDetailsComponent implements OnInit {

  employeeId: string = '';
  employeeDetails: any;

  constructor(private actRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(data => {
      this.employeeId = data.id;
      // console.log(this.employeeId);
      
      this.employeeService.getEmployee(this.employeeId).subscribe(data => {
        console.log('employee details : ' , data);
        this.employeeDetails = data;        
      }, (error => {
        console.log('++++++ ' , error);        
      }))
    })
  }

}
