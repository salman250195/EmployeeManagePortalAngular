import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  Employee: any = [];

  constructor() { }

  ngOnInit(): void {
    const source = from(this.Employee);
    source.subscribe(res => {
      console.log('employee : ' , res);      
    })
  }

}
