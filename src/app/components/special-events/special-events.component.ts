import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents: any = [];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.employeeService.getSpecialEvents().subscribe(data => {
      this.spinner.hide();
      console.log(data);
      this.specialEvents = data;
    }, (error) => {
      console.log("++++++ " , error);        
      if(error instanceof HttpErrorResponse) {
        if(error.status === 401) {
          this.router.navigate(['/login'])
        }
      }
    })
  }

}
