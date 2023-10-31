import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';


// ARC Tutorial

// @Injectable()
// export class EmployeeInterceptor implements HttpInterceptor {

//   constructor() {}

// intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//   // Auth tokens
//   // User validations etc
//   const API_KEY = 'API123';
//   const ROLE_KEY = 'ROLE123'

//   // clone and modiffy
//   // return next.handle(request.clone({setHeaders: {API_KEY, ROLE_KEY}}));

//   return next.handle(request.clone({setHeaders: {API_KEY, ROLE_KEY}}));

// }

// }




// @Injectable()
// export class EmployeeInterceptor implements HttpInterceptor {

//   constructor(private router: Router) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const token = localStorage.getItem('token');
//       if(token) {
//         request = request.clone({
//           setHeaders: {
//             Authorization: token
//           }
//         });
//       }
//       if(!request.headers.has('COntent-Type')) {
//         request = request.clone({
//           setHeaders : {
//             'content-type': 'application/json'
//           }
//         })
//       }

//       request = request.clone({
//         headers: request.headers.set('Accept', 'application/json')
//       });

//       return next.handle(request).pipe(
//         map((event: HttpEvent<any>) => {
//           if(event instanceof HttpResponse) {
//             console.log('event ----->>>', event);
//           }
//           return event;
//         }),
//         catchError((error: HttpErrorResponse) => {
//           console.log(error);
//           if(error.status === 401) {
//             this.router.navigate(['/create-employee']);
//           }
//           if(error.status === 400) {
//             alert(error.error)
//           }
//           return throwError(error);
//         })
//       )
//   }
// }


// @Injectable()
// export class EmployeeInterceptor implements HttpInterceptor {

//   constructor() { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     // console.log(`REQUESTED URL : ${request.url}`);
 
//     // return next.handle(request);

//     // Taping Request
//     // return next.handle(request).pipe(
//     //   tap(event => {
//     //     if(event.type == HttpEventType.Response) {
//     //       event.body.name = 'Changed By Interceptor',
//     //       console.log(event.body.name);          
//     //     }
//     //   })
//     // )


    // set custom headers
    // let headerReq = request.clone({
    //   setHeaders: {
    //     'x-company-name': 'UItec'
    //   }
    // })

    // return next.handle(headerReq);

    

//   }
// }



// @Injectable()
// export class EmployeeInterceptor implements HttpInterceptor {

//   constructor(private employeeService: EmployeeService) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     // global error handling using interceptor 
//     console.log('HTTP Request Started');
    
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//           console.log(error);
//           this.employeeService.error(error.error);
//           return throwError(error.error)
//       })
//     );    
//   }

//   setError(error: HttpErrorResponse): string {
//     let errorMessage = 'Unknown error occured';
//     if(error.error instanceof ErrorEvent) {
//       // Client side error 
//       errorMessage = error.error.message;
//     } else { 
//       // Server sides error
//       errorMessage = error.error;
//     }
//     return errorMessage;
//   }
// }



// Manipulating Request Objects, headers with Interceptors in the Angular.
// Accessing Http Response Event Object with Response Interceptors in the Angular.
@Injectable()
export class EmployeeInterceptor implements HttpInterceptor {

  constructor(private employeeService: EmployeeService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Manipulating Request Objects, headers with Interceptors in the Angular.
    // console.log('Sending request interceptor');
    // let modifiedRequest = request.clone({
      // headers: request.headers.append('auth', 'abc'),   // request headers
      // url: 'sasadadad'   // changed url
        // params: request.params.append('hai', 'hello world')    // changed params
    // })
    // console.log(modifiedRequest);
    // return next.handle(modifiedRequest);


    // Accessing Http Response Event Object with Response Interceptors in the Angular.
    
    // return next.handle(modifiedRequest).pipe(
    //   tap((event) => {
    //     console.log(event);
    //     console.log('Response from interceptor');        
    //     if(event.type === HttpEventType.Response) {
    //       console.log(event.body);          
    //     }
        
    //   })
    // );    

  return next.handle(request);

  }
}
