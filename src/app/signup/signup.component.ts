import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!: FormGroup
  constructor(private rut :Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      phonenumber:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required)
    })

  }

  submit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
    this.rut.navigateByUrl('')  
    }
  }

}
