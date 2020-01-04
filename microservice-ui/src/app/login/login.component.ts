import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submit: boolean;
  errorMsg: string;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginService: LoginService, private informationService: InformationService) { }

  login() {
    this.submit = true;
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
        if (data) {
          this.informationService.phoneNo = this.loginForm.value.phoneNo;
          this.router.navigate(['/home']);
        } else {
          this.errorMsg = 'Invalid phone number/password';
          this.submit = false;
        }
      },
      error => {
        this.errorMsg = error;
        this.submit = false;
      }
    );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phoneNo: ['', [Validators.required, Validators.pattern('[7-9][0-9]{9}')]],
      password: ['', [Validators.required]]
    });
  }

}
