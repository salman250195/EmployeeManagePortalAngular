import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events: any = [];

  constructor(private employeeService: EmployeeService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
      this.spinner.show();
    this.employeeService.getAllEvents().subscribe(data => {
      this.spinner.hide();
      console.log(data);
      this.Events = data;
    }, (error) => {
      console.log("+++++ " , error);      
    }
    )
  }

}
