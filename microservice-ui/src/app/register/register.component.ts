import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submit: boolean;
  successMsg: string;
  errorMsg: string;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private registerService: RegisterService, private informationService: InformationService) { }

  register() {
    this.submit = true;
    this.registerService.register(this.registerForm.value).subscribe(
      data => this.successMsg = 'Registered Successfully',
      error => {
        this.errorMsg = error;
        this.submit = false;
      }
    );
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      phoneNo: ['', [Validators.required, Validators.pattern('[7-9][0-9]{9}')]],
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      currentPlan: this.formBuilder.group({
      planId: ['', [Validators.required]]
      })
    });
  }
}
