import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get signIn() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.loginForm.valid) {
      return;
    } else {
      this.authService.loginUser(this.loginForm.value).subscribe((res: any) => {
        console.log(res);  
        let data = res;
        this.token = data['token'];
        localStorage.setItem('token', this.token);    
        this.router.navigate(['/special-events']);  
      }, (error) => {
        console.log(error);        
      })
    }
    console.log(this.loginForm.value);
  }
}
