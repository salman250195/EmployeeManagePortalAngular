import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee, Events, SpecialEvents } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  error: any;

  constructor(private httpClient: HttpClient) { }

    // GET Employees
    getAllEmployee():Observable<Employee> {
      const employeeUrl = "http://localhost:3000/employee/employee";
      return this.httpClient.get<Employee>(employeeUrl).pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

    // POST Employee
    addEmployee(employee: any): Observable<Employee> {
    const employeeUrl = "http://localhost:3000/employee/addEmployee";
    return this.httpClient.post<Employee>(employeeUrl, employee).pipe(
      catchError(this.handleError)
    );
    } 

    // GET Employee By Id
    getEmployee(id: any) {
      const employeeUrl = "http://localhost:3000/employee/read/" + id;
      return this.httpClient.get(employeeUrl, id).pipe(
        catchError(this.handleError)
      );
    }

    // PUT (UPDATE) Employee
    updateEmployee(id:any, empObj: any): Observable<Employee> {
      const employeeUrl = "http://localhost:3000/employee/update/" + id;
      return this.httpClient.put<Employee>(employeeUrl, empObj).pipe(
        catchError(this.handleError)
      );
    }

    // DELETE Employee
    deleteEmployee(id: any):Observable<Employee> {
      const employeeUrl = "http://localhost:3000/employee/delete/" + id;
      return this.httpClient.delete<Employee>(employeeUrl).pipe(
        catchError(this.handleError)
      );
    }


    // Events Service (GET Method)
    getAllEvents():Observable<Events> {
      const eventUrl = "http://localhost:3000/events/events";
      return this.httpClient.get<Events>(eventUrl).pipe(
        catchError(this.handleError)
      );
    }

    // Special Events (GET Method)
    getSpecialEvents():Observable<SpecialEvents> {
      const specialEventsUrl = "http://localhost:3000/special-events/special-events";
      return this.httpClient.get<SpecialEvents>(specialEventsUrl).pipe(
        catchError(this.handleError)
      );
    }


    
  // Error handling
    // handleError(error: any) {
    //   return throwError(error.message || "Server error")
    // }

    handleError(error: HttpErrorResponse) {
      console.log('=======', error);      
      return throwError(error.message || "Server Error");
    }

}
