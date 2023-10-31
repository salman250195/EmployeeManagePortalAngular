import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registerForm: any;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get signUp() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.registerForm.valid) {
      return;
    } else {
      this.authService.registerUser(this.registerForm.value).subscribe((res: any) => {
        // console.log(data);    
        console.log(res);    
        console.log('User registerd successfully');
        let data = res;
        this.token = data['token'];
        localStorage.setItem('token', this.token); 
        this.router.navigate(['/special-events']);                   
      }, (error) => {
        console.log(error);        
      })
    }
    console.log(this.registerForm.value);
  }

}
